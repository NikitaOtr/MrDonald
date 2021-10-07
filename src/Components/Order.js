import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { OrderItem } from './OrderItem';

const OrderStyled = styled.div`
    width: 30%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
`;

const OrderTotal = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

export const Order = () => (
    <OrderStyled>
        <OrderTitle>Ваш Заказ</OrderTitle>
        <OrderContent>
            <OrderList>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
            </OrderList>
        </OrderContent>
        <OrderTotal>
            <span>Итого</span>
            <span>{12344..toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</span>
        </OrderTotal>
        <Button>Оформить</Button>
    </OrderStyled>
);