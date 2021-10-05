import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Menu } from './Components/Menu';


function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <NavBar></NavBar>
            <Banner></Banner>
            <Menu></Menu>
        </>
    );
}

export default App;
