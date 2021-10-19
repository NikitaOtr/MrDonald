import React from 'react';
import styled from 'styled-components';

import logoImg from '../../image/logo.svg';
import enterImg from '../../image/sign.svg';

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

const ImgLogo = styled.img`
    width: 60px;
`;

const Content = styled.div`
    display: flex;
`;

const UserName = styled.p`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;

const H1 = styled.h1`
    font-size: 35px;
`;

const ButtonEnter = styled.button`
    background-color: transparent;
    border: transparent;
    color: white;
    padding: 0;
    font-size: 16px;
`;

const ImgEnter = styled.img`
    width: 40px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='logo'/>
            <H1>{'MrDonald\'s'}</H1>
        </Logo>
        {!authentication ?
            <ButtonEnter onClick={logIn}>
                <ImgEnter src={enterImg} alt='enter'/>
                <p>Вход</p>
            </ButtonEnter> :
            <Content>
                <UserName>{authentication.displayName}</UserName>
                <ButtonEnter onClick={logOut}>
                    <ImgEnter src={enterImg} alt={authentication.displayName}/>
                    <p>Выход</p>
                </ButtonEnter>
            </Content>
        }
    </NavBarStyled>
);