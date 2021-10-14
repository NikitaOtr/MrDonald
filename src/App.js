import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './Components/GlobalStyle/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Banner } from './Components/Banner/Banner';
import { Menu } from './Components/Menu/Menu';
import { ModalDish } from './Components/Modal/ModalDish';
import { Order } from './Components/Order/Order';

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
`;

function App() {

    const hookOpenItem = useOpenItem();
    const hookOrder = useOrder();

    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Banner/>
            <Main>
                <Order {...hookOrder}/>
                <Menu {...hookOpenItem}/>
            </Main>
            {hookOpenItem.openItem && <ModalDish {...hookOpenItem} {...hookOrder}/>}
        </>
    );
}

export default App;
