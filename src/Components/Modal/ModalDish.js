import React from 'react';
import styled from 'styled-components';

import { CountDish } from './CountDish';
import { Button } from '../Buttons/Mainbutton';
import { Toppings } from './Toppings';
import { Choices } from './Choices';

import { useCountDish } from '../Hooks/useCountDish';
import { useTopping } from '../Hooks/useTopping';
import { useChoice } from '../Hooks/useChoice';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceDish } from '../Functions/totalPriceDish';

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

export const ModalDish = ({ openItem,  setOpenItem, order, setOrder }) => {

    const hookCount = useCountDish();
    const hookToppings = useTopping(openItem);
    const hookChoice = useChoice();

    const closeModal = event => {
        if (event.target.matches('#overlay')) { setOpenItem(null); }
    };

    const newOrderOfDish = {
        id: openItem.id,
        img: openItem.img,
        name: openItem.name,
        price: openItem.price,
        count: hookCount.countDish,
        toppings: hookToppings.toppings,
        choice: hookChoice.choice,
    };

    const addToOrder = () => {
        setOrder([...order, newOrderOfDish]);
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
                    <CountDish {...hookCount}/>
                    {openItem.toppings && <Toppings {...hookToppings}/>}
                    {openItem.choices && <Choices {...hookChoice} {...openItem}/>}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{priceToLocale(totalPriceDish(newOrderOfDish))}</span>
                    </TotalPriceItem>
                    <Button onClick={addToOrder} disabled={openItem.choices && !newOrderOfDish.choice}>
                        Заказать
                    </Button>
                </Content>
            </Modal>
        </Overlay>
    );
};