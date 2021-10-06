import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';


function App() {
    const [openItem, setOpenItem] = React.useState(null);

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <NavBar></NavBar>
            <Banner></Banner>
            <Menu setOpenItem={setOpenItem}></Menu>
            <ModalItem openItem={openItem} setOpenItem={setOpenItem}></ModalItem>
        </>
    );
}

export default App;
