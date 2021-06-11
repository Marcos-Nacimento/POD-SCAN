import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
`;

export const Content = styled.View `
    align-items: center;
`;

export const Header = styled.View `
    height: 180px;
    background-color: #9370db;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text `
    margin: 30px;
    font-family: 'Roboto_400Regular';
    color: #696969;
`;

export const Image = styled.Image `
    height: 100px;
    width: 100px;
`;

export const ButtonContainer = styled.TouchableOpacity `
    height: 40px;
    width: 300px;
    border-radius: 12px;
    background-color: #9370db;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
`;

export const ButtonName = styled.Text `
    color: #FFF;
    font-family: 'Roboto_400Regular';
`;

export const Title = styled.Text `
    color: #FFFFFF;
    font-family: 'Roboto_400Regular';
`;