import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
`;
function App() {
    const [openItem, setOpenItem] = React.useState(null);

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <NavBar></NavBar>
            <Banner></Banner>
            <Main>
                <Order></Order>
                <Menu setOpenItem={setOpenItem}></Menu>
            </Main>
            <ModalItem openItem={openItem} setOpenItem={setOpenItem}></ModalItem>
        </>
    );
}

export default App;
