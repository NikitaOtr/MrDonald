import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #ffffff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
    height: 400px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeaderContent = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: space-between;
`;

const Price = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;

export const ModalItem = ({ openItem,  setOpenItem }) => {

    function closeModal(event) {
        if (event.target.matches('#overlay')) { setOpenItem(null); }
    }

    if (!openItem) { return null; }

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}></Banner>
                <Content>
                    <HeaderContent>
                        <h3>{openItem.name}</h3>
                        <Price>{openItem.price.toLocaleString('ru-Ru', { style: 'currency', currency: 'RUB' })}</Price>
                    </HeaderContent>
                    <Button>Заказать</Button>
                </Content>
            </Modal>
        </Overlay>
    );
};