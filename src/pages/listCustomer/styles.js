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


export const ContainerConfirm = styled.div`
position: absolute;
top: 200px;
left: 400px;
width: 500px;
height: 80px;
border: 2px solid #ddd;
background-color: lightgray;
`

export const ContainerTitle = styled.div`
width: 100%;
height: 40px;
background-color: lightgreen;
display: flex;
align-items: center;
justify-content: center;
`

export const TitleConfirm = styled.label`
font-weight: bold;
font-size: 16px;
`

export const ContainerButtomConfirm = styled.div`
position: absolute;
bottom: 0px;
left: 0px;
right: 0px;
height:40px;
background-color: lightgreen;
display:flex;
align-items: center;
justify-content: space-around;
`
export const ButtonConfirm = styled.button`
margin: 10px;
`

