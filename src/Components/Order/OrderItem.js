import React from 'react';
import styled from 'styled-components';

import trash from '../../image/trash.svg';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceDish } from '../Functions/totalPriceDish';


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

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 16px;
`;

export const OrderItem = ({ dish, order, setOrder }) => {

    const checkedNameToppings = dish.toppings.filter(topping => topping.checked).map(topping => topping.name);

    const deleteDish = deleteDish => {
        const newOrder = order.filter(dish => dish !== deleteDish);
        setOrder(newOrder);
    };

    return (
        <div>
            <StyleOrderItem>
                <Content>
                    <Name>{dish.name} {dish.choice}</Name>
                    <Count>{dish.count}</Count>
                    <Price>{priceToLocale(totalPriceDish(dish))}</Price>
                </Content>
                <TrashButton onClick={() => deleteDish(dish)}/>
            </StyleOrderItem>
            {checkedNameToppings.length > 0 &&
                <Toppings><p>{'Топинги: ' + checkedNameToppings.join(', ')}</p></Toppings>
            }
        </div>
    );
};