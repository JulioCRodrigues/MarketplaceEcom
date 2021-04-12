import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


import {

    Container,
    CartPricing,
    CartTotalPricing,
    CartButton,
    CartButtonText

} from './styles';

export default function FloatingCart(){

    const navigation = useNavigation();

    return(

        <Container>
            <CartButton
                onPress={() => navigation.navigate('Cart')}
            >
                <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />

                <CartButtonText>2 items</CartButtonText>

                <CartPricing>
                    <CartTotalPricing>R$ 200,00</CartTotalPricing>
                </CartPricing>

                <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />

            </CartButton>
        </Container>
    )
}