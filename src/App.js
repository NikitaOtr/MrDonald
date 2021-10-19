import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import styled from 'styled-components';

import { GlobalStyle } from './Components/GlobalStyle/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Banner } from './Components/Banner/Banner';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
    apiKey: "AIzaSyAbhCf4BStFZIHzjQDHpo390K5QqHX9TWk",
    authDomain: "mrdnalds.firebaseapp.com",
    databaseURL: "https://mrdnalds-default-rtdb.firebaseio.com",
    projectId: "mrdnalds",
    storageBucket: "mrdnalds.appspot.com",
    messagingSenderId: "174944668952",
    appId: "1:174944668952:web:a11508b3d319d6b274a26d"
};

firebase.initializeApp(firebaseConfig);

const Main = styled.div`
    display: flex;
    background-color: #fff;
`;

function App() {

    const hookAuth = useAuth(firebase.auth);
    const hookOpenItem = useOpenItem();
    const hookOrder = useOrder();

    return (
        <>
            <GlobalStyle/>
            <NavBar {...hookAuth}/>
            <Banner/>
            <Main>
                <Menu {...hookOpenItem}/>
                <Order {...hookOrder } {...hookOpenItem} {...hookAuth}/>
            </Main>
            {hookOpenItem.openItem && <ModalItem {...hookOpenItem} {...hookOrder}/>}
        </>
    );
}

export default App;
