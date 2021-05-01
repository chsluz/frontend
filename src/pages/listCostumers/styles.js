import styled from 'styled-components';

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

export const FloatingButtom = styled.div`
 position: absolute;
 right: 10px;
 bottom: 10px;
 height: 50px;
 width: 50px;
 background-color: lightgreen;
 border-radius: 25px;
 cursor: pointer;
 &:hover {
     background-color: green;
 }
`

export const Add = styled.label`
display: flex;
flex-direction: column;
height: 50px;
width: 50px;
font-size: 26px;
color: white;
align-items: center;
justify-content: center;
`