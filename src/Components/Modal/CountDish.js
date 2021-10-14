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

export const CountDish = ({ countDish, setCountDish, onChangeCountDish }) => (
    <CountWrapper>
        <span>Количество</span>
        <div>
            <ButtonCount disabled={countDish <= 1} onClick={() => setCountDish(countDish - 1)}>-</ButtonCount>
            <CountInput value={countDish} onChange={onChangeCountDish} type='number' min='1' max='99'/>
            <ButtonCount disabled={countDish >= 99} onClick={() => setCountDish(countDish + 1)}>+</ButtonCount>
        </div>
    </CountWrapper>
);