import {
    FavoriteBorder,
    FormatListNumbered,
    Preview,
} from '@mui/icons-material'
import styled from 'styled-components'
import Tooltip from '@mui/material/Tooltip'
import ProductRate from './ProductRate'
import { css } from 'styled-components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../redux/modalSlice'
import { addToWishlist } from '../redux/wishlistSlice'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const ProductAction = styled.div`
    position: absolute;
    right: 20px;
    top: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.2s ease-in-out;
`
const CartTitle = styled.span`
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
`
const ShoppingCartContainer = styled.div`
    margin-right: 0px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
`
const Cart = styled.div`
    width: 100%;
    background-color: #232323;
    color: #fff;
    height: 0px;
    opacity: 0;
    z-index: 5;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #eea287;
        transition: all 0.2s ease-in-out;
    }
    &:hover ${ShoppingCartContainer} {
        margin-right: 10px;
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 540px;
    margin: 0px 10px;
    cursor: pointer;
    &:hover ${ProductAction} {
        opacity: 1;
        transform: translateX(0px);
        transition: all 0.2s ease-in-out;
    }
    &:hover ${Cart} {
        height: 40px;
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
    ${mobile({ height: '350px' })}
`
const ImageContainer = styled.div`
    height: 390px;
    position: relative;
    margin-bottom: 10px;
    ${mobile({ height: '250px' })}
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.main}) center center/cover;
    transition: all 0.2s ease-in;
    &:hover {
        background: url(${(props) => props.sec}) center center/cover;
        transition: all 0.2s ease-in;
    }
`
const ProductStatus = styled.div``
const Status = styled.div`
    position: absolute;
    top: ${(props) => props.order * 35}px;
    left: 20px;
    height: 48px;
    width: 48px;
    color: #fff;
    font-size: ${(props) => (props.fs === 'Out of Stock' ? '11px' : '13px')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    border: none;
    ${(props) => {
        if (props.fs === 'Sale') {
            return css`
                background-color: #ef837b;
            `
        } else if (props.fs === 'New') {
            return css`
                background-color: #a6c76c;
            `
        } else if (props.fs === 'Top') {
            return css`
                background-color: #7dd2ea;
            `
        } else {
            return css`
                background-color: #cccccc;
            `
        }
    }};
`
const ProductActionContainer = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    color: #fff;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #eea287;
        transition: background-color 0.2s ease-in-out;
    }
`
const Favorite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:before {
        content: 'add to wishlist';
        position: absolute;
        font-size: 11px;
        font-weight: 300;
        display: flex;
        justify-content: start;
        align-items: center;
        color: #fff;
        width: 106px;
        height: 100%;
        border-radius: 15px;
        padding-left: 20px;
        background-color: #eea287;
        top: 0px;
        right: 0px;
        z-index: -5;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    &:hover::before {
        opacity: 1;
        visibility: visible;
        transition: all 0.2s ease-in-out;
        transform: translatex(-5px);
    }
`
const InfoContainer = styled.div`
    text-align: center;
`
const Categories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Category = styled.span`
    margin-right: 5px;
    font-size: 13px;
    color: #ccc;
    &:hover {
        color: #eea287;
    }
    ${mobile({ display: 'none' })}
`
const Title = styled.div`
    transition: all 0.3s ease;
    font-size: 15px;
    &:hover {
        color: #eea287;
        transition: all 0.3s ease;
    }
    ${mobile({ fontSize: '15px' })}
`
const Prices = styled.div`
    /* color: #eea287; */
    color: #777;
    margin: 5px;
    ${mobile({ fontSize: '14px', color: '#eea287' })}
`
const Rate = styled.div`
    display: flex;
    justify-content: center;
`

const Product = (item) => {
    const { img, status, category, title, price, reviews } = item
    const productInWishlist = useSelector((state) => state.wishlist.product)
    const rate = reviews
        ? reviews.reduce((a, c) => c.rating + a, 0) / reviews.length
        : null
    console.log(rate)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(openModal(item))
    }

    const handleAdd = () => {
        if (productInWishlist.length === 0) {
            dispatch(addToWishlist(item))
        } else if (productInWishlist.some((e) => e._id === item._id)) {
            return
        } else {
            dispatch(addToWishlist(item))
        }
    }

    return (
        <Container>
            <ImageContainer>
                <Image main={img[0]} sec={img[1]} />
                <ProductStatus>
                    {status?.map((item, i) => (
                        <Status fs={item} key={i} order={i + 1}>
                            {item}
                        </Status>
                    ))}
                </ProductStatus>
                <ProductAction>
                    <ProductActionContainer>
                        <Favorite onClick={handleAdd}>
                            <FavoriteBorder style={{ fontSize: 16 }} />
                        </Favorite>
                    </ProductActionContainer>
                    <ProductActionContainer onClick={handleClick}>
                        <Tooltip title="Quick View" placement="right-end">
                            <Preview style={{ fontSize: 16 }} />
                        </Tooltip>
                    </ProductActionContainer>
                </ProductAction>
                <Link to={`/product/${item._id}`}>
                    <Cart>
                        <ShoppingCartContainer>
                            <FormatListNumbered style={{ fontSize: 15 }} />
                        </ShoppingCartContainer>
                        <CartTitle>Select Options</CartTitle>
                    </Cart>
                </Link>
            </ImageContainer>
            <InfoContainer>
                <Categories>
                    {category?.map((item, i) => (
                        <Category key={i}>{item}</Category>
                    ))}
                </Categories>
                <Title>{title}</Title>
                <Prices>$ {price}</Prices>
                <Rate>
                    <ProductRate rate={rate} />
                </Rate>
            </InfoContainer>
        </Container>
    )
}

export default Product
