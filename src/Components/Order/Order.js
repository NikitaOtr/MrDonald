import React from 'react';
import styled from 'styled-components';

import { Button } from '../Buttons/Mainbutton';
import { OrderItem } from './OrderItem';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceOrder } from '../Functions/totalPriceOrder';

const OrderStyled = styled.div`
    width: 30%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

const Content = styled.div`
    flex-grow: 1;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 20px;
`;

const Total = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

const EmptyList = styled.p`
    font-size: 25px;
    text-align: center;
`;

export const Order = ({ order }) => (
    <OrderStyled>
        <Title>Ваш Заказ</Title>
        <Content>
            {order.length ?
                <List>
                    {order.map((item, index) => <OrderItem key={index} item={item}/>)}
                </List> :
                <EmptyList>Список заказов пуст</EmptyList>
            }
        </Content>
        <Total>
            <span>Итого</span>
            <span>{priceToLocale(totalPriceOrder(order))}</span>
        </Total>
        <Button>Оформить</Button>
    </OrderStyled>
);