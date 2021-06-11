import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #FFFFFF;
`;

export const Label = styled.Text `
    font-family: 'Roboto_400Regular';
    color: #696969;
`;

export const Header = styled.View `
    height: 190px;
    background-color: #9370db;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    elevation: 1;
`;

export const ContentHeader = styled.View `
    justify-content: center;
    align-items: center;
`;

export const ResultLabel = styled.Text `
    color: #FFFFFF;
    font-family: 'Roboto_400Regular';
    font-weight: bold;
    font-size: 19px;
`;

export const ContainerAntiVirus = styled.View `
    height: 20px;
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
}) ``;

export const AntiVirusName = styled.Text `
    font-family: 'Roboto_400Regular';
    color: #696969;
`;

export const DetectionAntiVirusStatus = styled.Text `
    font-family: 'Roboto_400Regular';
    color: #696969;
`;

export const ContainerDetectStatus = styled.View `
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text `
    font-family: 'Roboto_400Regular';
    color: #FFFFFF;
    margin-left: 8px;
    margin-top: 5px;
    margin-bottom: 3px;
`;

export const Circle = styled.View `
    height: 100px;
    width: 100px;
    border-radius: 50px;
    elevation: 2;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const OnPress = styled.TouchableOpacity `
    margin-top: 30px;
    margin-left: 5px;
`;

export const ContainerModal = styled.View `
    height: 300px;
    width: 300px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

export const ContentModal = styled.View `
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const MsgModal = styled.Text `
    font-family: 'Roboto_400Regular';
    margin: 14px;
`;