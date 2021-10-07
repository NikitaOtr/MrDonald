import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    font-size: 21px;
    background: #299B01;
    color: #fff;
    border-radius: 10px;
    border-width: 3px;
    border-color: transparent;
    transition: all .3s;
    &:hover {
        background-color:  #fff;
        color: #299B01;
        border-color: #299B01;
        transition: all .3s;
    }
`;