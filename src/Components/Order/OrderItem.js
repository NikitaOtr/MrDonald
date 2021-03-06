import React, { useRef } from 'react';
import styled from 'styled-components';

import trash from '../../image/trash.svg';

import { priceToLocale } from '../Functions/priceToLocale';
import { totalPriceDish } from '../Functions/totalPriceDish';

const StyleOrderItem = styled.li`
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transition: box-shadow 0.3s;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, .2);
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;    
`;

const Name = styled.span`
    flex-grow: 1;
`;

const Count = styled.span`
    margin-right: 30px;
`;

const Price = styled.span`
    width: 105px;
    text-align: right;
    margin-right: 15px;
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
    transition: all 0.5s;
    &:hover {
        transition: background-color 0.3s;
        background-color: rgba(3, 210, 247, .3);
    }
`;

const Additives = styled.div`
    color: #9a9a9a;
    font-size: 16px;
`;

export const OrderItem = ({ dish, indexDish, deleteDish, setOpenItem }) => {

    const checkedNameToppings = dish.selectedToppings
        .filter(topping => topping.checked)
        .map(topping => topping.name);

    const refDeleteButton = useRef(null);

    const eventFunc = event => {
        const target = event.target;
        if (target === refDeleteButton.current) { return deleteDish(indexDish); }
        setOpenItem({ ...dish, index: indexDish });
    };

    return (
        <StyleOrderItem onClick={eventFunc} >
            <Content>
                <Name>{dish.name}</Name>
                <Count>{dish.selectedCount}</Count>
                <Price>{priceToLocale(totalPriceDish(dish))}</Price>
                <TrashButton ref={refDeleteButton}/>
            </Content>
            {dish.selectedChoice &&
                <Additives><p>{dish.selectedChoice}</p></Additives>
            }
            {checkedNameToppings.length > 0 &&
                <Additives><p>{'??????????????: ' + checkedNameToppings.join(', ')}</p></Additives>
            }
        </StyleOrderItem>
    );
};