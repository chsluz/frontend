import React from 'react';

import {Container,Label } from './styles';


const ErrorComponent = (props) => {
    return (
        <Container>
            <Label>{props.msg}</Label>
        </Container>
    )
}

export default ErrorComponent;