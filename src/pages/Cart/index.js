import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcom from 'react-native-vector-icons/Feather';

import {

    Container,
    ProductContainer,
    ProductList,
    Product,
    ProductImage,
    ProductTitleContent,
    ProductTitle,
    ProductPriceContainer,
    TotalContainer,
    ProductSinglePrice,
    ProductPrice,
    ProductQuantity,
    ActionContainer,
    ActionButton,
    TotalProductsContainer,
    TotalProductsText,
    SubTotalValue

} from './styles';

import formatValue from '../../utils/formatValue';
import EmptyCard from '../../components/EmptyCart';

export default function Cart() {

    const [products, setProducts] = useState([

    ])

    const cartSize = useMemo(() => {

        return products.length || 0;
    }, [products])

    const cartTotal = useMemo(() => {

        const cartAmount = products.reduce((acc, product) => {
                const totalPrice = acc + (product.price * product.quantity);
                return totalPrice
        }, 0)

        return formatValue(cartAmount);
    }, [products])

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={EmptyCard}
                    ListFooterComponent={<View/>}
                    ListFooterComponentStyle={{
                        heigth: 80,
                    }}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage  source={{uri: item.image_url}}/>
                            <ProductTitleContent>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductPrice>{formatValue(item.price)}</ProductPrice>

                                <TotalContainer>
                                    <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                                    <ProductPrice>
                                        {formatValue(item.price * item.quantity)}
                                    </ProductPrice>
                                </TotalContainer>  
                                </ProductPriceContainer>
                            </ProductTitleContent>

                        <ActionContainer>
                            <ActionButton onPress={() => {}}>
                                <FeatherIcom  name="plus" size={16} color="#E83F5B"/>
                            </ActionButton>
                            <ActionButton onPress={() => {}}>
                                <FeatherIcom  name="minus" size={16} color="#E83F5B"/>
                            </ActionButton>
                        </ActionContainer>

                        </Product>
                    )}
                />
            </ProductContainer>
            <TotalProductsContainer>
                <FeatherIcom  name="shopping-cart" color="#FFF" size={24}/>
                <TotalProductsText>{cartSize} {cartSize == 1 ? 'item' : 'itens'}</TotalProductsText>
                <SubTotalValue>{cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    ) 
}