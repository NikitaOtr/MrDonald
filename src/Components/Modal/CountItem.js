import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;

`;

const ButtonCount = styled.button`
    background-color: transparent;
    width: 30px;

`;

export const CountItem = ({ countItem, changeCountItem }) => (
    <CountWrapper>
        <span>Количество</span>
        <div>
            <ButtonCount onClick={() => changeCountItem(countItem - 1)}>-</ButtonCount>
            <CountInput value={countItem} onChange={event => changeCountItem(event.target.value)} type='number'/>
            <ButtonCount onClick={() => changeCountItem(countItem + 1)}>+</ButtonCount>
        </div>
    </CountWrapper>
);