import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 20px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export const Choices = ({ choices, changeChoice, choice }) => (
    <>
        <h3>Выбирайте: </h3>
        <ChoiceWrap>
            {choices.map((possibleChoice, index)  => (
                <ChoiceLabel key={index}>
                    <ChoiceRadio type='radio' value={possibleChoice}
                        checked={possibleChoice === choice} onChange={changeChoice}/>
                    {possibleChoice}
                </ChoiceLabel>
            ))}
        </ChoiceWrap>
    </>
);