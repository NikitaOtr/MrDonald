import React from 'react';
import styled from 'styled-components';
import trash from '../../image/trash.svg';

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
    width: 100px;
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

export const OrderItem = ({ dish }) => (
    <StyleOrderItem>
        <Content>
            <Name>{dish.name}</Name>
            <Count>1</Count>
            <Price>{dish.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</Price>
        </Content>
        <TrashButton/>
    </StyleOrderItem>
);