import React from 'react'
import { Footer, Navbar } from '../components'
import styled from 'styled-components'
import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const Wrapper = styled.div`
    width: 93vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #1ee121;
    margin: 60px 0px;
`
const HeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
`
const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
`
const InfoHeader = styled.div`
    display: flex;
    padding: 0px 10px;
    /* margin-bottom: 20px; */
`
const Element = styled.span`
    flex: 1;
    color: ${(props) => (props.c === 'body' ? '#eea287' : '#333')};
    font-weight: 600;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: ${(props) => (props.c === 'body' ? '20px 5px' : '5px')};
`
const BtnContainer = styled.div`
    display: flex;
    margin-bottom: 60px;
    align-items: center;
    justify-content: center;
`
const OrdersBtn = styled.button`
    padding: 10px 30px;
    margin: 0px 10px;
    background-color: #368dc0;
    border: 1px solid #368dc0;
    color: #fff;
    transition: all 0.2s ease-in;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
        background-color: #276284;
        transition: all 0.2s ease-in;
    }
`

const Success = () => {
    const { state } = useLocation()
    const { amount, buyer, orderDate, products, status } = state

    return (
        <>
            <Navbar />
            <Wrapper>
                <HeaderContainer>
                    <CheckCircleOutlineOutlined sx={{ fontSize: '50px' }} />
                    <HeaderTitle>Thank you for your order!</HeaderTitle>
                </HeaderContainer>
                <InfoContainer>
                    <InfoHeader>
                        <Element c="header">Order id:</Element>
                        <Element c="header">Order date:</Element>
                        <Element c="header">Buyer:</Element>
                        <Element c="header">Status:</Element>
                        <Element c="header">Amount:</Element>
                    </InfoHeader>
                    <InfoHeader>
                        <Element c="body">Order id:</Element>
                        <Element c="body">{orderDate}</Element>
                        <Element c="body">{buyer}</Element>
                        <Element c="body">{status}</Element>
                        <Element c="body">{amount}</Element>
                    </InfoHeader>
                </InfoContainer>
                <BtnContainer>
                    <OrdersBtn>
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to="/orders"
                        >
                            Go to Orders page
                        </Link>
                    </OrdersBtn>
                    <OrdersBtn>
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to="/"
                        >
                            Continue Shopping
                        </Link>
                    </OrdersBtn>
                </BtnContainer>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Success
