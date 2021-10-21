import React from 'react';
import styled from 'styled-components';

import { Button } from '../Buttons/Mainbutton';
import { OrderItem } from './OrderItem';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceOrder } from '../Functions/totalPriceOrder';
import { projection } from '../Functions/projection';

const OrderBox = styled.div`
    background-color: inherit;
    width: 30%;
`;

const OrderStyled = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 100vh;
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
    gap: 10px;
    margin-bottom: 20px;
`;

const EmptyList = styled.p`
    font-size: 25px;
    text-align: center;
`;

const Total = styled.div`
    width: 350px;
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['selectedCount'],
    toppings: ['selectedToppings',
        arr => arr.filter(item => item.checked).map(item => item.name),
        arr => (arr.length ? arr : 'no topping'),
    ],
    choice: ['selectedChoice', item => (item ? item : 'no choice')],
};

export const Order = ({ order, setOrder, setOpenItem, authentication, logIn, firebaseDatabase }) => {

    const dataBase = firebaseDatabase();

    const sendOrder = () => {
        const newOrder = order.map(projection(rulesData));
        dataBase.ref('order').push().set({
            name: authentication.displayName,
            email: authentication.email,
            order: newOrder,
        });
        setOrder([]);
    };

    const deleteDish =  indexDeleteDish => {
        const newOrder = order.filter((_, index) => index !== indexDeleteDish);
        setOrder(newOrder);
    };

    const makeAnOrder = () => {
        if (!authentication) {
            sendOrder();
        } else {
            logIn();
        }
    };

    return (
        <OrderBox>
            <OrderStyled>
                <Title>Ваш Заказ</Title>
                <Content>
                    {order.length ?
                        <List>
                            {order.map((dish, index) =>
                                <OrderItem key={index} dish={dish} indexDish={index}
                                    deleteDish={deleteDish} setOpenItem={setOpenItem}/>)}
                        </List> :
                        <EmptyList>Список заказов пуст</EmptyList>
                    }
                </Content>
                <Total>
                    <span>Итого:</span>
                    <span>{priceToLocale(totalPriceOrder(order))}</span>
                </Total>
                <Button onClick={makeAnOrder}>Оформить</Button>
            </OrderStyled>
        </OrderBox>
    );
};