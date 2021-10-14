import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 20px;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;

`;

const ToppingChackbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export const Toppings = ({ toppings, checkToppings  }) => (
    <>
        <h3>Топинги</h3>
        <ToppingWrap>
            {toppings.map((topping, index)  => (
                <ToppingLabel key={index}>
                    <ToppingChackbox type='checkbox' checked={topping.checked} onChange={() => checkToppings(index)}/>
                    {topping.name}
                </ToppingLabel>
            ))}
        </ToppingWrap>
    </>
);
