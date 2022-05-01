import {
    AddShoppingCart,
    Close,
    Facebook,
    FavoriteBorder,
    Instagram,
    Pinterest,
    Twitter,
} from '@mui/icons-material'
import axios from 'axios'
import { useAxios } from '../hooks/useAxios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { Footer, Navbar } from '../components'
import Spinner from '../components/Spinner'
import Details from '../components/Details'
import DeliveryAndPayment from '../components/DeliveryAndPayment'
import ProductBackground from '../components/ProductBackground'
import ProductReviews from '../components/ProductReviews'

const Wrapper = styled.div`
    width: 93vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Modal = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    margin-top: 30px;
`
const ModalView = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`
const Images = styled.div`
    /* flex: 2; */
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`
const MainImageContainer = styled.div`
    position: relative;
    /* flex: 8; */
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
    height: 95%;
    cursor: move;
    &:hover ${MainImage} {
        opacity: 0;
    }
`
const Image = styled.img`
    height: 118px;
    width: 86px;
    margin-bottom: 7px;
    object-fit: cover;
    cursor: pointer;
`
const ModalInfo = styled.div`
    flex: 1;
    /* padding-left: 15px; */
    overflow: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ebebeb;
        border-radius: 4px;
    }
`
const ProductTitle = styled.h1`
    font-size: 24px;
    font-weight: 400;
    color: #333;
    margin-bottom: 5px;
`
const ProductPrice = styled.h3`
    font-size: 24px;
    font-weight: 400;
    color: #eea287;
    margin-bottom: 10px;
`
const ProductDescription = styled.p`
    font-size: 14px;
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
    &:hover {
        box-shadow: 0px 0px 2px 1px rgba(34, 60, 80, 0.39);
        transition: all 0.2s ease-in;
    }
`
const FilterTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #666;
`
const FilterSize = styled.select`
    padding: 7px 10px;
    font-size: 14px;
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
    padding: 7px 16px;
    font-size: 14px;
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
    padding: 10px 43px;
    background: transparent;
    text-transform: uppercase;
    cursor: pointer;
    color: #eea287;
    border: 1px solid #eea287;
    transition: all .2s ease-in;
    &:hover{
        background-color: #eea287;
        color: #fff;
        transition: all .2s ease-in;
    }
`
const WishlistBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-transform: uppercase;
    color: #666;
    font-size: 14px;
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
    font-size: 14px;
    font-weight: 400;
    color: #666;
    margin-right: 10px;
`
const Categories = styled.div`
    display: flex;
    align-items: center;
`
const Category = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #666;
    margin-right: 5px;
`
const SharContainer = styled(ProductCategory)``

const SocialContainer = styled(Categories)`
    color: #666;
`
const OtherInfo = styled.div`
    padding: 20px 10px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const OtherInfoBtn = styled.button`
    font-size: 16px;
    padding: 7px 25px;
    margin: 0px 10px;
    /* color: #eea287; */
    background-color: transparent;
    border: transparent;
    transition: all 0.2s ease-in;
    cursor: pointer;
    border-bottom: 2px solid #fff;
    &:hover {
        color: #eea287;
        transition: all 0.2s ease-in;
        border-bottom: 2px solid #eea287;
    }
`
const InfoContainer = styled.div`
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 3px;
`

const Productpage = () => {
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const { id } = useParams()
    const { title, img, color, status, desc, price, size, category } = product
    console.log(id)
    console.log(product)

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = ((e.pageX - left) / width) * 100
        const y = ((e.pageY - top) / height) * 100
        setBackgroundPosition(`${x}% ${y}%`)
    }

    const { loading, error, data } = useAxios(
        `http://localhost:5000/api/products/${id}`
    )

    useEffect(() => {
        setProduct(data)
    }, [data])

    const handleClik = (exp) => {
        if (exp === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    // const spinner = loading && !data ? <Spinner/> : null

    return (
        <>
            <Navbar />
            <Wrapper>
                <Modal>
                    {!product ? (
                        <Spinner />
                    ) : (
                        <>
                            <ModalView>
                                <Images>
                                    {img?.map((item, i) => (
                                        <Image key={i} src={item} />
                                    ))}
                                </Images>
                                <MainImageContainer>
                                    <ProductStatuses>
                                        {status?.map((item) => (
                                            <Status key={item} bg={item}>
                                                {item}
                                            </Status>
                                        ))}
                                    </ProductStatuses>
                                    <MainImageWrapper
                                        onMouseMove={handleMouseMove}
                                        style={{
                                            backgroundPosition: `${backgroundPosition}`,
                                            backgroundImage: `url(${
                                                img ? img[0] : null
                                            })`,
                                        }}
                                    >
                                        <MainImage src={img ? img[0] : null} />
                                    </MainImageWrapper>
                                </MainImageContainer>
                            </ModalView>
                            <ModalInfo>
                                <ProductTitle>{title}</ProductTitle>
                                <ProductPrice>$ {price}</ProductPrice>
                                <ProductDescription>{desc}</ProductDescription>
                                <FilterContainer>
                                    <FilterTitle>Color:</FilterTitle>
                                    <FilterColor>
                                        {color?.map((item) => (
                                            <Color key={item} bg={`#${item}`} />
                                        ))}
                                    </FilterColor>
                                </FilterContainer>
                                <FilterContainer>
                                    <FilterTitle>Size:</FilterTitle>
                                    <FilterSize>
                                        <Size>Select a size</Size>
                                        {size?.map((item) => (
                                            <Size key={item}>{item}</Size>
                                        ))}
                                    </FilterSize>
                                </FilterContainer>
                                <FilterContainer>
                                    <FilterTitle>Qty:</FilterTitle>
                                    <AmountContainer>
                                        <AmountChangeBtn
                                            onClick={() => handleClik('dec')}
                                        >
                                            -
                                        </AmountChangeBtn>
                                        <Amount>{quantity}</Amount>
                                        <AmountChangeBtn
                                            onClick={() => handleClik('inc')}
                                        >
                                            +
                                        </AmountChangeBtn>
                                    </AmountContainer>
                                </FilterContainer>
                                <CartButtonContainer>
                                    <AddToCartBtn>
                                        <AddShoppingCart
                                            sx={{
                                                fontSize: '14px',
                                                marginRight: '7px',
                                            }}
                                        />{' '}
                                        Add to card
                                    </AddToCartBtn>
                                    <WishlistBtn>
                                        {' '}
                                        <FavoriteBorder
                                            sx={{
                                                color: '#eea287',
                                                fontSize: '14px',
                                                marginRight: '7px',
                                            }}
                                        />
                                        Add to wishlist
                                    </WishlistBtn>
                                </CartButtonContainer>

                                <ProductCategory>
                                    <CategoryTitle>Category:</CategoryTitle>
                                    <Categories>
                                        {category?.map((item) => (
                                            <Category key={item}>
                                                {item + ','}
                                            </Category>
                                        ))}
                                    </Categories>
                                </ProductCategory>
                                <SharContainer>
                                    <CategoryTitle>Share:</CategoryTitle>
                                    <SocialContainer>
                                        <Facebook
                                            sx={{
                                                fontSize: '16px',
                                                marginRight: '12px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#eea287',
                                                },
                                            }}
                                        />
                                        <Twitter
                                            sx={{
                                                fontSize: '16px',
                                                marginRight: '12px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#eea287',
                                                },
                                            }}
                                        />
                                        <Instagram
                                            sx={{
                                                fontSize: '16px',
                                                marginRight: '12px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#eea287',
                                                },
                                            }}
                                        />
                                        <Pinterest
                                            sx={{
                                                fontSize: '16px',
                                                marginRight: '12px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#eea287',
                                                },
                                            }}
                                        />
                                    </SocialContainer>
                                </SharContainer>
                            </ModalInfo>{' '}
                        </>
                    )}
                </Modal>

                <OtherInfo>
                    <ButtonContainer>
                        <OtherInfoBtn>DETAILS</OtherInfoBtn>
                        <OtherInfoBtn>DELIVERY AND PAYMENT</OtherInfoBtn>
                        <OtherInfoBtn>PRODUCT BACKGROUND</OtherInfoBtn>
                        <OtherInfoBtn>REVIEWS (2)</OtherInfoBtn>
                    </ButtonContainer>
                    <InfoContainer>
                        {/* <Details /> */}
                        {/* <DeliveryAndPayment/>
                        <ProductBackground/> */}
                        <ProductReviews />
                    </InfoContainer>
                </OtherInfo>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Productpage
