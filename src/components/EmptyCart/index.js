import React from 'react';
import FeatherIcom from 'react-native-vector-icons/Feather';

import {Container, EmptyCardText} from './styles';

export default function EmptyCart(){

    return(
        <Container>
            <FeatherIcom name="slash" size={38} color="#F3F9FF" />
            <EmptyCardText>O carrinho está vazio!</EmptyCardText>
        </Container>
    );
}