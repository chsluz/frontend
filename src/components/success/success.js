import React from 'react';

import {Container,Label } from './styles';


const SuccessComponent = (props) => {
    return (
        <Container>
            <Label>{props.msg}</Label>
        </Container>
    )
}

export default SuccessComponent;