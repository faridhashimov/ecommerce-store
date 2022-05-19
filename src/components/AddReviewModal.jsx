import {
    AddShoppingCart,
    Close,
    FacebookOutlined,
    FavoriteBorder,
    Instagram,
    Pinterest,
    Twitter,
} from '@mui/icons-material'
import { Icon } from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { css } from 'styled-components'
import { addToCart } from '../redux/cartSlice'
import { closeModal } from '../redux/modalSlice'
import { addToWishlist } from '../redux/wishlistSlice'
import AddReview from './AddReview'

const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
`
const ModalContainer = styled.div`
    position: relative;
    min-height: 80%;
    width: 30%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 3px;
`
const Modal = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`
const ModalView = styled.div`
    flex: 1;
    display: flex;
`
const Images = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`
const MainImageContainer = styled.div`
    position: relative;
    flex: 8;
    overflow: hidden;
`
const ProductStatuses = styled.div`
    position: absolute;
    top: 15px;
    left: 10px;
`
const Status = styled.div`
    padding: 3px 7px;
    margin-bottom: 3px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    ${(props) => {
        if (props.bg === 'Sale') {
            return css`
                background-color: #ef837b;
            `
        } else if (props.bg === 'New') {
            return css`
                background-color: #a6c76c;
            `
        } else if (props.bg === 'Top') {
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

const MainImage = styled.img`
    width: 100%;
    height: 100%;
`
const MainImageWrapper = styled.figure`
    width: 100%;
    height: 100%;
    cursor: move;
    &:hover ${MainImage} {
        opacity: 0;
    }
`

const Image = styled.img`
    height: 108px;
    width: 78px;
    margin-bottom: 7px;
    object-fit: cover;
    cursor: pointer;
    /* border: 1px solid coral; */
`
const ModalInfo = styled.div`
    flex: 1;
    padding-left: 15px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ebebeb;
        border-radius: 4px;
    }
`

const ModalClose = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30px;
    top: 10px;
    right: 10px;
    color: #7b7b7b;
    cursor: pointer;
    z-index: 999;
`
const ProductTitle = styled.h1`
    font-size: 23px;
    font-weight: 400;
    color: #333;
    margin-bottom: 5px;
`
const ProductPrice = styled.h3`
    font-size: 22px;
    font-weight: 400;
    color: #eea287;
    margin-bottom: 10px;
`
const ProductDescription = styled.p`
    font-size: 13px;
    font-weight: 300;
    color: #777;
    margin-bottom: 15px;
    line-height: 24px;
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const FilterColor = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`

const Color = styled.div`
    background-color: ${(props) => props.bg};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-right: 7px;
    cursor: pointer;
    border: 1.5px solid #fff;
    transition: all 0.2s ease-in;
    ${(props) => {
        if (props.shadow) {
            return css`
                box-shadow: 0px 0px 2px 1px rgba(34, 60, 80, 0.39);
                transition: all 0.2s ease-in;
            `
        } else {
            return css`
                box-shadow: none;
                transition: all 0.3s ease-in-out;
            `
        }
    }}
    &:hover {
        box-shadow: 0px 0px 2px 1px rgba(34, 60, 80, 0.39);
        transition: all 0.2s ease-in;
    }
`
const FilterTitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #666;
`
const FilterSize = styled.select`
    padding: 7px 5px;
    font-size: 12px;
    font-weight: 400;
    color: #777;
    outline: none;
    margin-left: 40px;
    border: 1px solid #d7d7d7;
`
const Size = styled.option``

const AmountContainer = styled.div`
    margin-left: 43px;
    border: 1px solid #d7d7d7;
    padding: 7px 5px;
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 95px;
    display: flex;
    justify-content: space-between;
`
const AmountChangeBtn = styled.button`
    background: transparent;
    border: transparent;
    color: #777;
    cursor: pointer;
    &:hover {
        color: #eea287;
    }
`
const Amount = styled.span``

const CartButtonContainer = styled.div`
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #d7d7d7;
`
const AddToCartBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 31px;
    background: transparent;
    text-transform: uppercase;
    cursor: pointer;
    color: #eea287;
    border: 1px solid #eea287;
    transition: all 0.2s ease-in;
    &:disabled {
        cursor: not-allowed;
    }

    &:disabled:hover {
        color: #777;
        border: 1px solid #777;
        background-color: transparent;
    }
    &:hover {
        background-color: #eea287;
        color: #fff;
        transition: all 0.2s ease-in;
    }
`
const WishlistBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-transform: uppercase;
    color: #666;
    font-size: 13px;
    cursor: pointer;
    margin-left: 40px;
    border: transparent;
    transition: all 0.3s ease-in;
    &:hover {
        color: #eea287;
        transition: all 0.3s ease-in;
    }
`
const ProductCategory = styled.div`
    margin: 15px 0px;
    display: flex;
    align-items: center;
`
const CategoryTitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #666;
    margin-right: 10px;
`
const Categories = styled.div`
    display: flex;
    align-items: center;
`
const Category = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #666;
    margin-right: 5px;
`
const SharContainer = styled(ProductCategory)``

const SocialContainer = styled(Categories)`
    color: #666;
`
const StyledIcon = styled(Icon)`
    font-size: 16px !important;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        color: #eea287;
    }
`
const AddReviewModal = ({ setOpen }) => {
    const handleModalClose = (e) => {
        let modalBg = e.target.getAttribute('data-bg')
        if (modalBg !== 'modal-bg') {
            return
        } else {
            setOpen(false)
        }
    }
    return (
        <ModalBackground data-bg="modal-bg" onClick={handleModalClose}>
            <ModalContainer>
                <ModalClose onClick={() => setOpen(false)}>
                    <Close />
                </ModalClose>
                <Modal>
                    <AddReview />
                </Modal>
            </ModalContainer>
        </ModalBackground>
    )
}

export default AddReviewModal
