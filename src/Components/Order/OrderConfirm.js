import React, { useContext } from 'react';
import styled from 'styled-components';

import { Overlay } from '../Style/Overlay';
import { Title } from '../Style/LocalTitle';
import { Total } from '../Style/TotalPrice';

import { Button } from '../Style/Mainbutton';

import { projection } from '../Functions/projection';
import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceOrder } from '../Functions/totalPriceOrder';
import { Context } from '../Functions/context';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
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

const sendOrder = (dataBase, order, authentication) => {
    const newOrder = order.map(projection(rulesData));
    dataBase.ref('order').push().set({
        name: authentication.displayName,
        email: authentication.email,
        order: newOrder,
    });
};

export const OrderConfirm = () => {

    const { hookOrder: { order, setOrder },
        hookAuth: { authentication },
        hookOrderConfirm: { setOpenOrderConfirm },
        hookThankForOrder: { setThankForOrder },
        firebaseDatabase } = useContext(Context);

    const dataBase = firebaseDatabase();

    const closeModal = event => {
        if (event.target.matches('#overlay')) { setOpenOrderConfirm(false); }
    };
    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Title>{authentication.displayName}</Title>
                <Text>Осталось только подтверлить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <span>{priceToLocale(totalPriceOrder(order))}</span>
                </Total>
                <Button onClick={() => {
                    sendOrder(dataBase, order, authentication);
                    setOrder([]);
                    setOpenOrderConfirm(false);
                    setThankForOrder(true);
                }}>Оформить</Button>
            </Modal>
        </Overlay>
    );
};