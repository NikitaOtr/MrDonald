import React from 'react';
import styled from 'styled-components';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Banner } from './Components/Banner/Banner';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { ThankForOrder } from './Components/Order/ThankForOrder';

import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrder } from './Components/Hooks/useOrder';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useThankForOrder } from './Components/Hooks/useThankForOrder';

import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { Context } from './Components/Functions/context';

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
    const hookOrderConfirm = useOrderConfirm();
    const firebaseDatabase = firebase.database;
    useTitle(hookOpenItem.openItem);

    const hookThankForOrder = useThankForOrder();

    return (
        <Context.Provider
            value={{ hookAuth, hookOpenItem, hookOrder, hookOrderConfirm, hookThankForOrder,
                firebaseDatabase }}
        >
            <GlobalStyle/>
            <NavBar/>
            <Banner/>
            <Main>
                <Menu/>
                <Order/>
            </Main>
            {hookOpenItem.openItem && <ModalItem/>}
            {hookOrderConfirm.openOrderConfirm && <OrderConfirm/>}
            {hookThankForOrder.thankForOrder && <ThankForOrder/>}
        </Context.Provider>
    );
}

export default App;
