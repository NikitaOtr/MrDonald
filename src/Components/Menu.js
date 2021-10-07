import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DB/DBMenu';
import { MenuList } from './MenuList';

const MenuStyled = styled.section`
    width: 70%;
    background-color: inherit;
    border-left: black solid;

`;

const SectionMenu = styled.section`
    padding: 2%;
`;

const H2 = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>

        <SectionMenu>
            <H2>Бургеры</H2>
            <MenuList itemList={dbMenu.burger} setOpenItem={setOpenItem}></MenuList>
        </SectionMenu>

        <SectionMenu>
            <H2>Закуски / Напитки</H2>
            <MenuList itemList={dbMenu.other} setOpenItem={setOpenItem}></MenuList>
        </SectionMenu>
    </MenuStyled>
);