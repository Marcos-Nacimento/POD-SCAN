import React from 'react';
import 
{ 
    Container, 
    Header,
    Label,
    Image,
    Content,
    ButtonContainer,
    ButtonName,
    Title
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as DocumentPicker from 'expo-document-picker';

export default () => {
    const navigation = useNavigation();

    const getFile = async () => {
        const result = await DocumentPicker.getDocumentAsync()
        
        if(result.type === 'success') {
            navigation.navigate('scanDetail', result);
        };
    };

    return(
        <Container>
            <Header>
                <MaterialCommunityIcons name='shield-bug-outline' color='#FFF' size={50}/>
                <Title>POD SCAN</Title>
            </Header>
            <Content>
                <Label>
                    Análise arquivos suspeitos para detectar tipos de malware e 
                    compartilhe-os automaticamente com a comunidade de segurança.
                </Label>
                <Image 
                    source={require('../../assets/scan.png')}
                />
                <ButtonContainer onPress={() => getFile()}>
                    <ButtonName>escolher arquivo</ButtonName>
                </ButtonContainer>
            </Content>
        </Container>
    );
};