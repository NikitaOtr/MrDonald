import React, { useContext } from 'react';
import styled from 'styled-components';

import { Overlay } from '../Style/Overlay';
import { Button } from '../Style/Mainbutton';

import { Context } from '../Functions/context';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height: 300px;
    background-color: white;
`;

const Text = styled.div`
    text-align: center;
    font-size: 40px;
`;

export const ThankForOrder = () => {

    const { hookThankForOrder: { setThankForOrder } } = useContext(Context);

    setTimeout(() => setThankForOrder(false), 3000);

    const closeModal = event => {
        if (event.target.matches('#overlay')) { setThankForOrder(false); }
    };

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Content>
                <Text>Спасибо за покупку!!!</Text>
                <Button onClick={() => setThankForOrder(false)}>Закрыть</Button>
            </Content>
        </Overlay>
    );
};