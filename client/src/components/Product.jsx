import {
    FavoriteBorder,
    FormatListNumbered,
    Preview,
    FavoriteOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'
import Tooltip from '@mui/material/Tooltip'
import ProductRate from './ProductRate'
import { css } from 'styled-components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { mobile } from '../responsive'
import { Link, useNavigate } from 'react-router-dom'
import Portal from '../Portal'
import ProductModal from './ProductModal'
import { selectWishlist } from '../redux/selectors'

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
        background-color: #f27a1a;
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
    margin: 0px 10px 15px;
    padding-bottom: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 22px -8px rgba(0, 0, 0, 0.25);
        transition: all 0.2s ease-in-out;
    }
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
        background-color: #f27a1a;
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
        background-color: #f27a1a;
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
    font-size: 13px;
    color: #ccc;
    a {
        &:hover {
            color: #f27a1a;
        }
    }
`
const Category = styled(Link)`
    text-decoration: none;
    color: inherit;
    ${mobile({ display: 'none' })}
`
const Title = styled.h2`
    transition: all 0.3s ease;
    font-size: 15px;
    font-weight: 400;
    color: #555;
    margin-top: 4px;
    &:before {
        content: '${(props) => props.brand}';
        font-size: 15px;
        font-weight: 600;
        margin-right: 4px;
    }
    &:hover {
        color: #f27a1a;
        transition: all 0.3s ease;
    }
    ${mobile({ fontSize: '15px' })}
`
const Prices = styled.h3`
    font-size: 17px;
    font-weight: 500;
    color: #777;
    margin: 7px 0px;
    ${mobile({ fontSize: '14px', color: '#F27A1A' })}
`
const Rate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ReviewCount = styled.span`
    margin-left: 10px;
    color: #ccc;
    font-size: 18px;
    line-height: 16px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Product = (item) => {
    const [open, setOpen] = useState(false)
    const { img, status, category, title, price, reviews, brand } = item
    const productInWishlist = useSelector(selectWishlist)
    let navigate = useNavigate()
    const rate = reviews
        ? reviews.reduce((a, c) => c.rating + a, 0) / reviews.length
        : null
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (productInWishlist.length === 0) {
            dispatch(addToWishlist(item))
        } else if (productInWishlist.some((e) => e._id === item._id)) {
            navigate('/wishlist')
            return
        } else {
            dispatch(addToWishlist(item))
        }
    }

    const liked = productInWishlist.some((e) => e._id === item._id)

    return (
        <>
            <Container>
                <ImageContainer>
                    <StyledLink to={`/product/${item._id}`}>
                        <Image main={img[0]} sec={img[1]} />
                    </StyledLink>
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
                                {liked ? (
                                    <FavoriteOutlined
                                        style={{ fontSize: 16, color: '#fff' }}
                                    />
                                ) : (
                                    <FavoriteBorder style={{ fontSize: 16 }} />
                                )}
                            </Favorite>
                        </ProductActionContainer>
                        <ProductActionContainer onClick={() => setOpen(true)}>
                            <Tooltip title="Quick View" placement="right-end">
                                <Preview style={{ fontSize: 16 }} />
                            </Tooltip>
                        </ProductActionContainer>
                    </ProductAction>
                    <Cart>
                        <ShoppingCartContainer>
                            <FormatListNumbered style={{ fontSize: 17 }} />
                        </ShoppingCartContainer>
                        <StyledLink
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            to={`/product/${item._id}`}
                        >
                            <CartTitle>Select Options</CartTitle>{' '}
                        </StyledLink>
                    </Cart>
                </ImageContainer>
                <InfoContainer>
                    <Categories>
                        {category?.map((item, i) => (
                            <Category key={i} to="/list" state={{ item }}>
                                {(i ? ', ' : ' ') + item}
                            </Category>
                        ))}
                    </Categories>
                    <Title brand={brand}>{title}</Title>
                    <Prices>$ {price}</Prices>
                    <Rate>
                        <ProductRate fz={22} rate={rate} />
                        <ReviewCount>{reviews.length}</ReviewCount>
                    </Rate>
                </InfoContainer>
            </Container>
            {open && (
                <Portal>
                    <ProductModal product={item} setOpen={setOpen} />
                </Portal>
            )}
        </>
    )
}

export default Product
