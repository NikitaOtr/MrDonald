import React from 'react';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';
import { useFetch } from '../Hooks/useFetch';

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

const Louder = styled.div`
    width: 12rem;
    height: 12rem;
    position: relative;
    margin: auto;
    margin-top: 25px;

    .sk-circle {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .sk-circle:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: rgba(107, 233, 103);
        border-radius: 100%;
        animation: sk-fading-circle-delay 1.2s infinite ease-in-out both;
    }

    @keyframes sk-fading-circle-delay {
        0%, 39%, 100% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
    }

    .sk-circle-2 {
        transform: rotate(30deg);
    }
    .sk-circle-2:before {
        animation-delay: -1.1s;
    }

    .sk-circle-3 {
        transform: rotate(60deg);
    }
    .sk-circle-3:before {
        animation-delay: -1s ;
    }

    .sk-circle-4 {
        transform: rotate(90deg);
    }
    .sk-circle-4:before {
        animation-delay: -.9s;
    }

    .sk-circle-5 {
        transform: rotate(120deg);
    }
    .sk-circle-5:before {
        animation-delay: -.8s;
    }

    .sk-circle-6 {
        transform: rotate(150deg);
    }
    .sk-circle-6:before {
        animation-delay: -.7s;
    }

    .sk-circle-7 {
        transform: rotate(180deg);
    }
    .sk-circle-7:before {
        animation-delay: -.6s;
    }

    .sk-circle-8 {
        transform: rotate(210deg);
    }
    .sk-circle-8:before {
        animation-delay: -.5s;
    }

    .sk-circle-9 {
        transform: rotate(240deg);
    }
    .sk-circle-9:before {
        animation-delay: -.4s;
    }

    .sk-circle-10 {
        transform: rotate(270deg);
    }
    .sk-circle-10:before {
        animation-delay: -.3s;
    }

    .sk-circle-11 {
        transform: rotate(300deg);
    }
    .sk-circle-11:before {
        animation-delay: -.2s;
    }

    .sk-circle-12 {
        transform: rotate(330deg);
    }
    .sk-circle-12:before {
        animation-delay: -.1s;
    }
`;

export const Menu = ({ setOpenItem }) => {
    const res = useFetch();
    const dbMenu = res.response;
    // const f = false;
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
                </MenuStyled> :
                res.error ?
                    <div>Извините. Мы исправим это</div> :
                    <Louder>
                        <i className="sk-circle sk-circle-1"></i>
                        <i className="sk-circle sk-circle-2"></i>
                        <i className="sk-circle sk-circle-3"></i>
                        <i className="sk-circle sk-circle-4"></i>
                        <i className="sk-circle sk-circle-5"></i>
                        <i className="sk-circle sk-circle-6"></i>
                        <i className="sk-circle sk-circle-7"></i>
                        <i className="sk-circle sk-circle-8"></i>
                        <i className="sk-circle sk-circle-9"></i>
                        <i className="sk-circle sk-circle-10"></i>
                        <i className="sk-circle sk-circle-11"></i>
                        <i className="sk-circle sk-circle-12"></i>
                    </Louder>
            }
        </MenuBox>
    );
};