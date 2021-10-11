import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './Components/GlobalStyle/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Banner } from './Components/Banner/Banner';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
`;

function App() {

    const openItem = useOpenItem();
    const order = useOrder();

    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Banner/>
            <Main>
                <Order {...order}/>
                <Menu {...openItem}/>
            </Main>
            { openItem.openItem && <ModalItem {...openItem} {...order}/>}
        </>
    );
}

export default App;
