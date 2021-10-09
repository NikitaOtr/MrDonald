import React from 'react';
import styled from 'styled-components';
import dbMenu from '../../DB/DBMenu';
import { MenuItem } from './MenuItem';

const MenuStyled = styled.section`
    width: 70%;
    background-color: inherit;
    border-left: black solid;

`;

const Section = styled.section`
    padding: 2%;
`;

const H2 = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Section>
            <H2>Бургеры</H2>
            <List>
                {dbMenu.burgers.map(burger => <MenuItem key={burger.id} dish={burger} setOpenItem={setOpenItem}/>)}
            </List>
        </Section>

        <Section>
            <H2>Закуски / Напитки</H2>
            <List>
                {dbMenu.other.map(item => <MenuItem key={item.id} dish={item} setOpenItem={setOpenItem}/>)}
            </List>
        </Section>
    </MenuStyled>
);