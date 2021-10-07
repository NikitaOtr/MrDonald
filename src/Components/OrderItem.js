import React from 'react';
import styled from 'styled-components';
import trash from '../image/trash.svg';

const StyleOrderItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
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
`;

export const OrderItem = () => (
    <StyleOrderItem>
        <Content>
            <span>name</span>
            <span>{123..toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</span>
        </Content>
        <TrashButton></TrashButton>
    </StyleOrderItem>
);