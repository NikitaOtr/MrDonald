import React, { useContext } from 'react';
import styled from 'styled-components';

import { Title } from '../Style/LocalTitle';
import { Total } from '../Style/TotalPrice';

import { Button } from '../Style/Mainbutton';
import { OrderItem } from './OrderItem';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceOrder } from '../Functions/totalPriceOrder';

import { Context } from '../Functions/context';

const OrderBox = styled.div`
    background-color: inherit;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, .2);
    width: 30%;
`;

const OrderStyled = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 85vh;
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

export const Order = () => {

    const { hookOrder: { order, setOrder },
        hookAuth: { authentication, logIn },
        hookOpenItem: { setOpenItem },
        hookOrderConfirm: { setOpenOrderConfirm } } = useContext(Context);

    const deleteDish =  indexDeleteDish => {
        const newOrder = order.filter((_, index) => index !== indexDeleteDish);
        setOrder(newOrder);
    };

    const makeAnOrder = () => {
        if (authentication) {
            setOpenOrderConfirm(true);
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
                {order.length ?
                    <Total>
                        <span>Итого:</span>
                        <span>{priceToLocale(totalPriceOrder(order))}</span>
                    </Total> : <></>
                }
                <Button disabled={!(order.length > 0)} onClick={makeAnOrder}>Оформить</Button>
            </OrderStyled>
        </OrderBox>
    );
};