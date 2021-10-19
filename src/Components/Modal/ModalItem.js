import React from 'react';
import styled from 'styled-components';

import { CountItem } from './CountItem';
import { Button } from '../Buttons/Mainbutton';
import { Toppings } from './Toppings';
import { Choices } from './Choices';

import { useCountItem } from '../Hooks/useCountItem';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

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

export const ModalItem = ({ openItem,  setOpenItem, order, setOrder }) => {

    const isEdit = openItem.index > -1;

    const hookCountItem = useCountItem(openItem.selectedCount);
    const hookToppings = useToppings(openItem.toppings, openItem.selectedToppings);
    const hookChoices = useChoices(openItem.selectedChoice);

    const closeModal = event => {
        if (event.target.matches('#overlay')) { setOpenItem(null); }
    };

    const newDish = {
        ...openItem,
        selectedCount: hookCountItem.countItem,
        selectedToppings: hookToppings.toppings,
        selectedChoice: hookChoices.choice,
    };

    const editOrder = () => {
        const newOrder = [...order];
        newOrder[openItem.index] = newDish;
        setOrder(newOrder);
        setOpenItem(null);
    };

    const addToOrder = () => {
        setOrder([...order, newDish]);
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
                    <CountItem {...hookCountItem}/>
                    {openItem.toppings && <Toppings {...hookToppings}/>}
                    {openItem.choices && <Choices {...openItem} {...hookChoices} />}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{priceToLocale(totalPriceDish(newDish))}</span>
                    </TotalPriceItem>
                    <Button onClick={isEdit ? editOrder : addToOrder}
                        disabled={openItem.choices && !newDish.selectedChoice}>
                        { isEdit ? 'Редактировать' : 'Добавить' }
                    </Button>
                </Content>
            </Modal>
        </Overlay>
    );
};