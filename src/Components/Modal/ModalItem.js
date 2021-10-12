import React from 'react';
import styled from 'styled-components';

import { CountItem } from './CountItem';
import { Button } from '../Buttons/Mainbutton';
import { Toppings } from './Toppings';

import { useCountItem } from '../Hooks/useCountItem';
import { useTopping } from '../Hooks/useTopping';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceItem } from '../Functions/totalPriceItem';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #ffffff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
    height: 400px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeaderContent = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: space-between;
`;

const Price = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: center;
`;

export const ModalItem = ({ openItem,  setOpenItem, order, setOrder }) => {

    const counter = useCountItem();
    const toppings = useTopping(openItem);

    const closeModal = event => {
        if (event.target.matches('#overlay')) { setOpenItem(null); }
    };

    const newOrderItem = {
        ...openItem,
        count: counter.count,
        toppings: toppings.toppings,
    };

    const addToOrder = () => {
        setOrder([...order, newOrderItem]);
        setOpenItem(null);
    };

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <h3>{openItem.name}</h3>
                        <Price>{priceToLocale(openItem.price)}</Price>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{priceToLocale(totalPriceItem(newOrderItem))}</span>
                    </TotalPriceItem>
                    <Button onClick={addToOrder}>Заказать</Button>
                </Content>
            </Modal>
        </Overlay>
    );
};