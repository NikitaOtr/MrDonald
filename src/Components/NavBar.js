import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import enterImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const H1 = styled.h1`
    font-size: 24px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ButtonEnter = styled.button`
    background-color: transparent;
    border: transparent;
    color: white;
    padding: 0;
`;

const ImgEnter = styled.img`
    width: 30px;
`;

const TextEnter = styled.p`
    font-size: 16px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo'></ImgLogo>
            <H1>{"MrDonald's"}</H1>
        </Logo>
        <ButtonEnter>
            <ImgEnter src={enterImg} alt='enter'></ImgEnter>
            <TextEnter>Вход</TextEnter>
        </ButtonEnter>
    </NavBarStyled>
);