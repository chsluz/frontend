import styled from 'styled-components';

import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center;
`;

export const ContainerSearch = styled.div`
display: flex;
flex-direction: column;
height: 60px;
width: 100%;
background-color: lightgreen;
align-items: flex-end;
justify-content: center;
margin-bottom: 10px;
padding-right: 30px;
`

export const Title = styled.label`
display: flex;
flex-direction: column;
height: 80px;
width: 100%;
background-color: lightgreen;
align-items: center;
justify-content: center;
text-align: center;
font-size: 24px;
font-weight: bold;
`
export const FormStyled = styled.form`
display: flex;
flex-direction: column;
border: 1px solid #ddd;
padding: 10px;
`

export const TextFieldStyled = styled(TextField)`
width: 400px;
height: 60px;
margin-bottom: 100px;
`

export const ButtonStyled = styled.button`
margin-top: 50px;
background-color: lightgreen;
border-radius: 10px;
height: 40px;
width: 90%;
font-size: 20px;
margin-left: 10px;
`