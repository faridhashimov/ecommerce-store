import {
    AddShoppingCart,
    Close,
    Facebook,
    FavoriteBorder,
    Instagram,
    Pinterest,
    Star,
    StarBorder,
    Twitter,
} from '@mui/icons-material'
import axios from 'axios'
// import { useAxios } from '../hooks/useAxios'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { AddReview, Footer, MainImageComponent, Navbar } from '../components'
import Spinner from '../components/Spinner'
import Details from '../components/Details'
import DeliveryAndPayment from '../components/DeliveryAndPayment'
import ProductBackground from '../components/ProductBackground'
import ProductReviews from '../components/ProductReviews'
import { SvgIcon } from '@mui/material'
import { addToCart } from '../redux/cartSlice'
import { useAxios } from '../hooks/useAxios'

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
const Images = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
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
    color: #f27a1a;
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
        color: #f27a1a;
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
    color: #f27a1a;
    border: 1px solid #f27a1a;
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
        background-color: #f27a1a;
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
    font-size: 14px;
    cursor: pointer;
    margin-left: 40px;
    border: transparent;
    transition: all 0.3s ease-in;
    &:hover {
        color: #f27a1a;
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
    /* margin-right: 5px; */
`
const SharContainer = styled(ProductCategory)``

const SocialContainer = styled(Categories)`
    color: #666;
`
const OtherInfo = styled.div`
    padding: 20px 0px;
    /* border: 1px solid #ccc;
    border-radius: 3px; */
`
const MainInfo = styled.div`
    border: 1px solid #ccc;
    border-radius: 3px;
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
    background-color: transparent;
    border: transparent;
    transition: all 0.2s ease-in;
    cursor: pointer;
    ${(props) => {
        if (props.bb) {
            return css`
                border-bottom: 2px solid #f27a1a;
                transition: all 0.2s ease-in;
            `
        } else {
            return css`
                border-bottom: 2px solid #fff;
                transition: all 0.2s ease-in;
            `
        }
    }}
    /* 2px solid #fff; */
    &:hover {
        color: #f27a1a;
        transition: all 0.2s ease-in;
        border-bottom: 2px solid #f27a1a;
    }
`
const InfoContainer = styled.div`
    padding: 30px 30px 10px;
    /* border: 1px solid #ccc;
    border-radius: 3px; */
`
const StyledSocial = styled(SvgIcon)`
    font-size: 20px !important;
    margin-right: 12px;
    cursor: pointer;
    &:hover {
        color: #f27a1a;
    }
`
const LoginForReview = styled.div`
    width: 100%;
    /* height: 70px;
     */
    padding: 0px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #333;
    }
`

const Productpage = () => {
    const [chooseColor, setChooseColor] = useState('')
    const [chooseSize, setChooseSize] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [product, setProduct] = useState(null)
    const [otherInfo, setOtherInfo] = useState('delivery')
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const { id } = useParams()

    // const { brand, title, img, color, status, desc, price, size, category } =
    //     product
    const [image, setImage] = useState('')

    // console.log(product)

    const { clearError, error, data, loading } = useAxios(
        'http://localhost:5000/api/products/' + id
    )
    // console.log(loading)
    console.log('render')

    useEffect(() => {
        setProduct(data)
        data && setImage(data.img[0])
    }, [id, data])

    const onSetImage = useCallback((item) => {
        setImage(item)
    }, [])

    const onSetQuantity = (exp) => {
        if (exp === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const onChooseColor = (color) => {
        setChooseColor(color)
    }
    const onAddToCart = () => {
        dispatch(
            addToCart({
                _id: id,
                brand: product.brand,
                title: product.title,
                img: product.img,
                productColor: chooseColor,
                productSize: chooseSize,
                price: product.price,
                quantity,
                total: product.price * quantity,
            })
        )
    }

    // const spinner = loading && !product ? <Spinner /> : null

    return (
        <>
            <Navbar />
            <Wrapper>
                {!product ? (
                    <Spinner />
                ) : (
                    <>
                        <Modal>
                            <ModalView>
                                <Images>
                                    {product?.img?.map((item, i) => (
                                        <Image
                                            onClick={() => onSetImage(item)}
                                            key={i}
                                            src={item}
                                        />
                                    ))}
                                </Images>
                                <MainImageContainer>
                                    <ProductStatuses>
                                        {product.status?.map((item) => (
                                            <Status key={item} bg={item}>
                                                {item}
                                            </Status>
                                        ))}
                                    </ProductStatuses>
                                    <MainImageComponent image={image} />
                                </MainImageContainer>
                            </ModalView>
                            <ModalInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductPrice>$ {product.price}</ProductPrice>
                                <ProductDescription>
                                    {product.desc}
                                </ProductDescription>
                                <FilterContainer>
                                    <FilterTitle>Color:</FilterTitle>
                                    <FilterColor>
                                        {product.color?.map((item) => (
                                            <Color
                                                onClick={() =>
                                                    onChooseColor(item)
                                                }
                                                key={item}
                                                bg={`#${item}`}
                                                shadow={
                                                    chooseColor === item
                                                        ? true
                                                        : null
                                                }
                                            />
                                        ))}
                                    </FilterColor>
                                </FilterContainer>
                                {product.size?.length > 0 && (
                                    <FilterContainer>
                                        <FilterTitle>Size:</FilterTitle>
                                        <FilterSize
                                            onChange={(e) =>
                                                setChooseSize(e.target.value)
                                            }
                                        >
                                            <Size>Select a size</Size>
                                            {product.size?.map((item) => (
                                                <Size key={item}>{item}</Size>
                                            ))}
                                        </FilterSize>
                                    </FilterContainer>
                                )}
                                <FilterContainer>
                                    <FilterTitle>Qty:</FilterTitle>
                                    <AmountContainer>
                                        <AmountChangeBtn
                                            onClick={() => onSetQuantity('dec')}
                                        >
                                            -
                                        </AmountChangeBtn>
                                        <Amount>{quantity}</Amount>
                                        <AmountChangeBtn
                                            onClick={() => onSetQuantity('inc')}
                                        >
                                            +
                                        </AmountChangeBtn>
                                    </AmountContainer>
                                </FilterContainer>
                                <CartButtonContainer>
                                    <AddToCartBtn
                                        onClick={onAddToCart}
                                        disabled={
                                            (!chooseColor || !chooseSize) &&
                                            product.size?.length > 0
                                                ? true
                                                : !chooseColor &&
                                                  product.size?.length === 0
                                                ? true
                                                : false
                                        }
                                    >
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
                                                color: '#F27A1A',
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
                                        {product.category?.map((item, i) => (
                                            <Category key={i}>
                                                {(i ? ', ' : '') + item}
                                            </Category>
                                        ))}
                                    </Categories>
                                </ProductCategory>
                                <SharContainer>
                                    <CategoryTitle>Share:</CategoryTitle>
                                    <SocialContainer>
                                        <StyledSocial component={Facebook} />
                                        <StyledSocial component={Twitter} />
                                        <StyledSocial component={Instagram} />
                                        <StyledSocial component={Pinterest} />
                                    </SocialContainer>
                                </SharContainer>
                            </ModalInfo>{' '}
                        </Modal>

                        <OtherInfo>
                            <ButtonContainer>
                                <OtherInfoBtn
                                    bb={otherInfo === 'details' ? true : false}
                                    onClick={() => setOtherInfo('details')}
                                >
                                    DETAILS
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={otherInfo === 'delivery' ? true : false}
                                    onClick={() => setOtherInfo('delivery')}
                                >
                                    DELIVERY AND PAYMENT
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={
                                        otherInfo === 'background'
                                            ? true
                                            : false
                                    }
                                    onClick={() => setOtherInfo('background')}
                                >
                                    PRODUCT BACKGROUND
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={otherInfo === 'reviews' ? true : false}
                                    onClick={() => setOtherInfo('reviews')}
                                >
                                    REVIEWS ({product.reviews?.length})
                                </OtherInfoBtn>
                            </ButtonContainer>
                            <MainInfo>
                                <InfoContainer>
                                    {otherInfo === 'details' ? (
                                        <Details />
                                    ) : otherInfo === 'delivery' ? (
                                        <DeliveryAndPayment />
                                    ) : otherInfo === 'background' ? (
                                        <ProductBackground />
                                    ) : (
                                        <ProductReviews
                                            reviews={product.reviews}
                                        />
                                    )}
                                </InfoContainer>
                            </MainInfo>
                        </OtherInfo>
                    </>
                )}
            </Wrapper>
            <Footer />
        </>
    )
}

export default Productpage
