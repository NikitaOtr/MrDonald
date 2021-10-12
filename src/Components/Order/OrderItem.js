import React from 'react';
import styled from 'styled-components';

import trash from '../../image/trash.svg';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceItem } from '../Functions/totalPriceItem';


const StyleOrderItem = styled.li`
    display: flex;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 15px;
`;

const Name = styled.span`
    flex-grow: 1;
`;

const Count = styled.span`
    margin-right: 30px;
`;

const Price = styled.span`
    width: 120px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 27px;
    height: 27px;
    border-color: transparent;
    background-color: #fff;
    background-image: url(${trash});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const OrderItem = ({ item }) => {
    const checkedNameToppings = item.toppings?.filter(topping => topping.checked).map(topping => topping.name);
    return (
        <div>
            <StyleOrderItem>
                <Content>
                    <Name>{item.name}</Name>
                    <Count>{item.count}</Count>
                    <Price>{priceToLocale(totalPriceItem(item))}</Price>
                </Content>
                <TrashButton/>
            </StyleOrderItem>
            {checkedNameToppings?.length > 0 && 'Топинги: ' + checkedNameToppings.join(', ')}
        </div>
    );
};