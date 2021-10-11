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

export const CountItem = ({ count, setCount, onChange }) => (
    <CountWrapper>
        <span>Количество</span>
        <div>
            <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
            <CountInput value={count} onChange={onChange} type='number' min='1' max='99'/>
            <ButtonCount disabled={count >= 99} onClick={() => setCount(count + 1)}>+</ButtonCount>
        </div>
    </CountWrapper>
);