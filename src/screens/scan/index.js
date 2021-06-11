import React, { useEffect, useState } from 'react';
import 
{ 
    Container, 
    Label,
    Header,
    ResultLabel,
    ContainerAntiVirus,
    Scroll,
    AntiVirusName,
    DetectionAntiVirusStatus,
    ContainerDetectStatus,
    Title,
    Circle,
    ContentHeader,
    OnPress,
    ContainerModal,
    ContentModal,
    MsgModal,
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

const apiKey = 'f2e5b8a2a103cde09cbefccd58276113c8791b071a4e122ea688fa29c82e6573';

export default ({ route }) => {
    const [scanFileComplete, setComplete] = useState(false);
    const [analyseFile, setAnalyseFile] = useState();
    const [isModal, setModal] = useState(true);

    const navigation = useNavigation();

    const scanFile = async () => {
        try {
            setComplete(true);

            const formData = new FormData();
            formData.append('file', {uri: route.params.uri, name: route.params.name, type: "image/jpg"});

            const { data } = await axios.post('https://www.virustotal.com/api/v3/files', formData, {
                headers: {
                    'x-apiKey': apiKey,
                    'Content-Type': 'multipart/form-data',
                },
            });

            const intervalId = setInterval(async () => {
                const { data : resultsAnalyses } = await axios.get(`https://www.virustotal.com/api/v3/analyses/${data.data.id}`, {
                    headers: {
                        'x-apiKey': apiKey,
                    }
                });
                
                if(resultsAnalyses.data.attributes.status === 'completed') {
                    setAnalyseFile(resultsAnalyses);
                    setComplete(false);
                    clearInterval(intervalId);
                    return;
                };
            }, 4000);
        }catch(error) {
            console.log(error.response.data)
        };
    };

    useEffect(() => {
        scanFile();
    }, []);

    if(scanFileComplete) {
        return(
            <Container
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF'
                }}
            >
                <LottieView
                    source={require('../../assets/loading.json')}
                    style={{
                        height: 100,
                        width: 500,
                        marginBottom: 15,
                    }}
                    loop
                    autoPlay
                />
                <Label>Análizando ...</Label>
                <Label>Isso pode levar um tempo!</Label>
            </Container>
        );
    };

    return (
        <Container>
            <Header>
                <OnPress onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons 
                        name='arrow-left'
                        color='#FFFFFF'
                        size={24}
                    />
                </OnPress>
                <ContentHeader>
                    <Circle>
                        {analyseFile ? 
                            <>
                                <ResultLabel style={{color: '#b22222'}}>
                                    {analyseFile.data.attributes.stats.malicious}
                                </ResultLabel>
                                <ResultLabel>-</ResultLabel>
                                <ResultLabel style={{color: '#32cd32'}}>
                                    {analyseFile.data.attributes.stats.undetected}
                                </ResultLabel>
                            </>
                        : null}
                    </Circle>
                    <Title>DETECÇÃO</Title>
                </ContentHeader>
            </Header>
            <Scroll>
                {analyseFile ? (
                    Object.values(analyseFile.data.attributes.results).map((item, index) => (
                        <ContainerAntiVirus key={index}>
                            <AntiVirusName>{item.engine_name}</AntiVirusName>
                            <ContainerDetectStatus>
                                <MaterialCommunityIcons 
                                    name={
                                        item.category === 'undetected'
                                        ? 'check-circle-outline'
                                        : item.category === 'type-unsupported'
                                        ? 'close-circle-outline'
                                        : 'close-circle-outline'
                                    }
                                    color={
                                        item.category === 'undetected'
                                        ? '#32cd32'
                                        : item.category === 'type-unsupported'
                                        ? '#696969'
                                        : '#dc143c'
                                    }
                                    size={20}
                                />
                                <DetectionAntiVirusStatus>
                                    {
                                        item.category === 'undetected' 
                                        ? 'não detectado' 
                                        : item.category === 'type-unsupported' 
                                        ? 'sem suporte' 
                                        : 'detectado'
                                    }
                                </DetectionAntiVirusStatus>
                            </ContainerDetectStatus>
                        </ContainerAntiVirus>
                    ))
                ): null}
            </Scroll>
            <Modal
                isVisible={isModal}
                statusBarTranslucent
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onBackButtonPress={() => setModal(false)}
                onBackdropPress={() => setModal(false)}
            >
                <ContainerModal>
                    <MaterialCommunityIcons 
                        name='close'
                        size={24}
                        style={{
                            margin: 5
                        }}
                        onPress={() => setModal(false)}
                    />
                    <ContentModal>
                        <MaterialCommunityIcons 
                            name={
                                analyseFile 
                                && 
                                analyseFile.data.attributes.stats.malicious > 0 
                                ? 'emoticon-devil-outline'
                                : 'emoticon-happy-outline'
                            }
                            color={
                                analyseFile 
                                && 
                                analyseFile.data.attributes.stats.malicious > 0 
                                ? '#dc143c'
                                : '#32cd32'
                            }
                            size={30}
                        />
                        <MsgModal
                            style={{
                                color: 
                                    analyseFile 
                                    && 
                                    analyseFile.data.attributes.stats.malicious > 0 
                                    ? '#dc143c'
                                    : '#32cd32'
                            }}
                        >
                            {
                                analyseFile 
                                && 
                                analyseFile.data.attributes.stats.malicious > 0 
                                ? 'Fornecedores de segurança sinalizaram este arquivo como malicioso.'
                                : 'Nenhum fornecedor de segurança sinalizou este arquivo como malicioso.'
                            }
                        </MsgModal>
                    </ContentModal>
                </ContainerModal>
            </Modal>
        </Container>
    );
};