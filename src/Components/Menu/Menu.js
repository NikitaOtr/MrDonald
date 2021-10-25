import React, { useContext } from 'react';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';
import { useFetch } from '../Hooks/useFetch';

import { CircleLouder } from '../Louders/CircleLouder';
import { Context } from '../Functions/context';

const MenuBox = styled.section`
    background-color: inherit;
    width: 70%;
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

export const Menu = () => {

    const res = useFetch();
    const { hookOpenItem: { setOpenItem } } = useContext(Context);

    return (
        <MenuBox>
            {res.response ?
                <MenuStyled>
                    <Section>
                        <H2>Бургеры</H2>
                        <List>
                            {res.response.burger.map(item => <MenuItem key={item.id}
                                item={item} setOpenItem={setOpenItem}/>)}
                        </List>
                    </Section>

                    <Section>
                        <H2>Закуски / Напитки</H2>
                        <List>
                            {res.response.other.map(item => <MenuItem key={item.id}
                                item={item} setOpenItem={setOpenItem}/>)}
                        </List>
                    </Section>
                </MenuStyled> :
                res.error ?
                    <div>Извините. Мы исправим это</div> :
                    <CircleLouder/>
            }
        </MenuBox>
    );
};