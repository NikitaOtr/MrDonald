import React from 'react';
import styled from 'styled-components';

// import dbMenu from '../../DB/DBMenu';

import { MenuItem } from './MenuItem';
import { useFetch } from '../Hooks/useFetch';

const MenuBox = styled.section`
    background-color: inherit;
    width: 70%;
    box-shadow: -10px 0px 15px 0px rgba(0, 0, 0, .2);
`;

const MenuStyled = styled.section`
    background-color: inherit;
    min-height: 100vh;
`;

const Section = styled.section`
    padding: 15px;
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

export const Menu = ({ setOpenItem }) => {
    const res = useFetch();
    const dbMenu = res.response;
    return (
        <MenuBox>
            {res.response ?
                <MenuStyled>
                    <Section>
                        <H2>Бургеры</H2>
                        <List>
                            {dbMenu.burger.map(item => <MenuItem key={item.id}
                                item={item} setOpenItem={setOpenItem}/>)}
                        </List>
                    </Section>

                    <Section>
                        <H2>Закуски / Напитки</H2>
                        <List>
                            {dbMenu.other.map(item => <MenuItem key={item.id} item={item} setOpenItem={setOpenItem}/>)}
                        </List>
                    </Section>
                </MenuStyled> : res.error ?
                    <div>Извините. Мы исправим это</div> :
                    <div>Загрузка...</div>
            }
        </MenuBox>
    );
};