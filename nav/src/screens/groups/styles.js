import styled from "styled-components/native";
import theme from "src/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GREEN_500};
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 32px;
`