import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
    background-color: #ccc;
`;

const SectionMenu = styled.section`
    padding: 2%;
`;

const H2 = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

export const Menu = () => (
    <MenuStyled>
        <SectionMenu>
            <H2>Бургеры</H2>
            <ListItem itemList={dbMenu.burger}></ListItem>
        </SectionMenu>

        <SectionMenu>
            <H2>Закуски / Напитки</H2>
            <ListItem itemList={dbMenu.other}></ListItem>
        </SectionMenu>
    </MenuStyled>
);