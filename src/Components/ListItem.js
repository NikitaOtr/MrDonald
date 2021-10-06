import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`;

const Item = styled.li`
    list-style: none;
    position: relative;
    font-size: 20px;
    width: 400px;
    height: 155px;
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
    padding: 15px;
    color: #ccc;
    z-index: 1;
    transition: all 0.5s;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 40%;
        z-index: -1
    }
    &:hover {
        cursor: pointer;
        font-size: 25px;
        color: white;
        transition: all 0.5s;
    }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item => (
            <Item key={item.id} img={item.img}
                onClick={() => setOpenItem(item)}>
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</p>
            </Item>
        ))}
    </List>
);