import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import enterImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px 0 60px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ButtonEnter = styled.button`
    background: inherit;
    border: none;
    color: white;
    padding: 0
`;

const ImgEnter = styled.img`
    withd: 50px;
`;

const TextEnter = styled.p`
    font-size: 16px
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo'/>
            <H1>${"MrDonald's"}</H1>
        </Logo>
        <ButtonEnter>
            <ImgEnter src={enterImg} alt='enter'/>
            <TextEnter>Вход</TextEnter>
        </ButtonEnter>
    </NavBarStyled>
);