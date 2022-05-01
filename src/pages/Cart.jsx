import { Navbar, Footer } from '../components'
import styled from 'styled-components'
import { Close, ShoppingCartOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { decreaseQt, deleteFromCart, increaseQt } from '../redux/cartSlice'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
`
const CarteHeader = styled.div`
    height: 200px;
    width: 100%;
    background: url('https://d-themes.com/react/molla/demo-8/images/page-header-bg.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const HeaderTitle = styled.h2`
    /* position: absolute; */
    font-weight: 400;
    font-size: 40px;
    line-height: 44px;
    color: #232323;
    text-align: center;
    span {
        font-weight: 400;
        font-size: 20px;
        color: #eea287;
    }
`
const CartBody = styled.div`
    width: 93vw;
    margin: 0 auto;
    margin-bottom: 30px;
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
`
const ProductsList = styled.div`
    flex: 5;
`
const ProductsListHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid #cccccc;
    display: flex;
    align-items: center;
    ${mobile({ display: 'none', marginBottom: '5px' })}
`
const Element = styled.div`
    flex: ${(props) => props.fl};
    background-color: ${(props) => props.bg};
    font-size: 15px;
    color: #999;
    padding: 20px 0px;
`
const ProductsListBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 5;
    ${mobile({ border: '1px solid #efefef' })}
`
const ProductsListBodyElement = styled(ProductsListHeader)`
    ${mobile({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spase-between',
        padding: '10px 0px',
    })}
`
const ImageTitleContainer = styled.div`
    flex: 14;
    display: flex;
    align-items: center;
    padding: 20px 0px;
    position: relative;
    ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`
const PriceContainer = styled.div`
    flex: 4;
    ${mobile({ marginBottom: '10px' })}
`
const StockStatusContainer = styled.div`
    flex: 4;
    ${mobile({ marginBottom: '10px' })}
`
const TotalContainer = styled.div`
    flex: 4;
    color: #eea287;
    ${mobile({ marginBottom: '10px' })}
`
const DeleteContainer = styled.div`
    flex: 1;
    ${mobile({ position: 'absolute', right: '20px' })}
`
const Image = styled.img`
    height: 65px;
    margin-right: 30px;
    ${mobile({ margin: '0px 0px 10px 0px ' })}
`
const Title = styled.h3`
    width: 200px;
    font-size: 14px;
    font-weight: 400;
    color: #666;
    ${mobile({ textAlign: 'center' })}
`
const Price = styled.span`
    font-size: 16px;
    font-weight: 400;
`
const StockStatus = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #eea287;
`
const Delete = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    cursor: pointer;
    &:hover {
        color: black;
    }
`
const NoProductContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    span {
        font-size: 15px;
        color: #777;
    }
`
const GoShopBtn = styled(Link)`
    padding: 7px 45px;
    background-color: #eea287;
    border: 1px solid #c9866e;
    cursor: pointer;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    outline: none;
    text-decoration: none;
    &:hover {
        background-color: #c9866e;
    }
`
const OrderInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    ${mobile({ flexDirection: 'column', alignItems: 'stretch' })}
`
const AmountContainer = styled.div`
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
const ProductSize = styled.span`
    margin-left: 10px;
    position: absolute;
    right: 55px;
    ${mobile({ right: '35px' })}
`
const ProductColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #${(props) => props.bg};
    margin-left: 10px;
    position: absolute;
    right: 20px;
    ${mobile({ height: '15px', width: '15px', right: '10px', top: '24px' })}
`
const CheckoutContainer = styled.div`
    flex: 2;
    padding-left: 10px;
    ${mobile({ padding: '0px' })}
`
const Checkout = styled.div`
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 540px;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
    padding: 15px 0px;
`
const CheckoutBody = styled.div`
    width: 85%;
    /* height: 95%; */
`
const ChekoutItem = styled.div`
    h1 {
        font-size: 16px;
        font-weight: 500;
        color: #333;
    }
    display: flex;
    justify-content: space-between;
    &:first-child {
        padding: 0px 0px 20px 0px;
    }
    &:nth-child(2) {
        padding: 30px 0px;
    }
    &:nth-child(3) {
        padding: 30px 0px 20px;
    }
    &:nth-child(1),
    &:nth-child(2) {
        border-bottom: 1px solid #ccc;
    }
`
const ShippingAdress = styled(ChekoutItem)`
    display: flex;
    flex-direction: column;
    padding: 25px 0px;
    border-bottom: 1px solid #ccc;
`
const InputContainer = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`
const RadioInput = styled.input`
    &:checked {
        color: #eea287;
    }
`
const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 300;
    color: #333;
    margin-left: 10px;
`
const Discount = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: #333;
`
const ChangeAdress = styled(Link)`
    display: inline-block;
    color: #ccc;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
    transition: all 0.2s ease-in;
    &:hover {
        color: #eea287;
        transition: all 0.2s ease-in;
    }
`
const Total = styled(ChekoutItem)`
    h1 {
        color: #eea287;
    }
    color: #eea287;
    padding: 25px 0px;
`
const CheckoutBtn = styled.button`
    text-transform: uppercase;
    border: 1px solid #eea287;
    outline: none;
    color: #eea287;
    cursor: pointer;
    width: 100%;
    padding: 7px 30px;
    background-color: transparent;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #eea287;
        transition: all 0.2s ease-in;
        color: #fff;
    }
`

const Cart = () => {
    const [discount, setDiscount] = useState(0)
    const product = useSelector((store) => store.cart.products)
    const dispatch = useDispatch()

    const totalSum = product
        .reduce((sum, prevValue) => sum + prevValue.total, 0)
        .toFixed(2)
    const cartTotal = (totalSum - discount).toFixed(2)
    console.log(typeof discount, typeof totalSum)
    const handleClik = (exp, id) => {
        if (exp === 'dec') {
            id.quantity > 1 && dispatch(decreaseQt(id))
        } else {
            dispatch(increaseQt(id))
        }
    }

    const handleDelete = (id) => {
        dispatch(deleteFromCart(id))
    }

    const handleRadioChange = (e) => {
        console.log(e.target)
        setDiscount(e.target.value)
    }

    console.log('rendered')

    return (
        <Container>
            <Navbar />
            <CarteHeader>
                <HeaderTitle>
                    Shopping Cart <br /> <span>Shop</span>
                </HeaderTitle>
            </CarteHeader>
            <CartBody>
                <Wrapper>
                    {product.length === 0 ? (
                        <NoProduct />
                    ) : (
                        <ProductsList>
                            <OrderInfo>
                                <ProductsListBody>
                                    <ProductsListHeader>
                                        <Element fl="14">
                                            <span>Product</span>
                                        </Element>
                                        <Element fl="4">
                                            <span>Price</span>
                                        </Element>
                                        <Element fl="4">
                                            <span>Quantity</span>
                                        </Element>
                                        <Element fl="4">
                                            <span>Total</span>
                                        </Element>
                                        <Element fl="1">
                                            {/* <span>Total</span> */}
                                        </Element>
                                    </ProductsListHeader>
                                    {product.map((item, i) => (
                                        <ProductsListBodyElement key={i}>
                                            <ImageTitleContainer fl="14">
                                                <Image
                                                    src={item.img[0]}
                                                    alt={item.title}
                                                />
                                                <Title>{item.title}</Title>
                                                <ProductSize>
                                                    {item.productSize}
                                                </ProductSize>
                                                <ProductColor
                                                    bg={item.productColor}
                                                />
                                            </ImageTitleContainer>
                                            <PriceContainer fl="4">
                                                <Price>$ {item.price}</Price>
                                            </PriceContainer>
                                            <StockStatusContainer fl="4">
                                                <StockStatus>
                                                    <AmountContainer>
                                                        <AmountChangeBtn
                                                            onClick={() =>
                                                                handleClik(
                                                                    'dec',
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </AmountChangeBtn>
                                                        <Amount>
                                                            {item.quantity}
                                                        </Amount>
                                                        <AmountChangeBtn
                                                            onClick={() =>
                                                                handleClik(
                                                                    'inc',
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </AmountChangeBtn>
                                                    </AmountContainer>
                                                </StockStatus>
                                            </StockStatusContainer>
                                            <TotalContainer fl="4">
                                                $
                                                {(
                                                    item.quantity * item.price
                                                ).toFixed(2)}
                                            </TotalContainer>
                                            <DeleteContainer fl="1">
                                                <Delete
                                                    onClick={() =>
                                                        handleDelete(item)
                                                    }
                                                >
                                                    <Close
                                                        sx={{
                                                            fontSize: '15px',
                                                        }}
                                                    />
                                                </Delete>
                                            </DeleteContainer>
                                        </ProductsListBodyElement>
                                    ))}
                                </ProductsListBody>
                                <CheckoutContainer>
                                    <Checkout>
                                        <CheckoutBody>
                                            <ChekoutItem>
                                                <h1>Cart Total</h1>
                                            </ChekoutItem>
                                            <ChekoutItem>
                                                <h1>Subtotal:</h1>
                                                <span>${totalSum}</span>
                                            </ChekoutItem>
                                            <ChekoutItem>
                                                <h1>Shipping:</h1>
                                            </ChekoutItem>
                                            <ChekoutItem>
                                                <InputContainer>
                                                    <RadioInput
                                                        checked={
                                                            +discount === 0
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={
                                                            handleRadioChange
                                                        }
                                                        id="free"
                                                        type="radio"
                                                        value={0}
                                                    />
                                                    <InputLabel htmlFor="free">
                                                        Free Shipping
                                                    </InputLabel>
                                                </InputContainer>
                                                <Discount>$0.00</Discount>
                                            </ChekoutItem>
                                            <ChekoutItem>
                                                <InputContainer>
                                                    <RadioInput
                                                        checked={
                                                            +discount === 10
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={
                                                            handleRadioChange
                                                        }
                                                        id="standard"
                                                        type="radio"
                                                        value={10}
                                                    />
                                                    <InputLabel htmlFor="standard">
                                                        Standard:
                                                    </InputLabel>
                                                </InputContainer>
                                                <Discount>$10.00</Discount>
                                            </ChekoutItem>
                                            <ChekoutItem>
                                                <InputContainer>
                                                    <RadioInput
                                                        checked={
                                                            +discount === 20
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={
                                                            handleRadioChange
                                                        }
                                                        id="express"
                                                        type="radio"
                                                        value={20}
                                                    />
                                                    <InputLabel htmlFor="express">
                                                        Express:
                                                    </InputLabel>
                                                </InputContainer>
                                                <Discount>$20.00</Discount>
                                            </ChekoutItem>
                                            <ShippingAdress>
                                                <h1>
                                                    Estimate for Your Country
                                                </h1>
                                                <ChangeAdress to="/adress">
                                                    Change Adress
                                                </ChangeAdress>
                                            </ShippingAdress>
                                            <Total>
                                                <h1>Total:</h1>
                                                <span>${cartTotal}</span>
                                            </Total>
                                            <CheckoutBtn>
                                                Proceed To Checkout
                                            </CheckoutBtn>
                                        </CheckoutBody>
                                    </Checkout>
                                </CheckoutContainer>
                            </OrderInfo>
                        </ProductsList>
                    )}
                </Wrapper>
            </CartBody>
            <Footer />
        </Container>
    )
}

const NoProduct = () => {
    return (
        <NoProductContainer>
            <ShoppingCartOutlined sx={{ fontSize: '140px', color: '#666' }} />
            <span>No products added to cart</span>
            <GoShopBtn to="/">Return to Shop</GoShopBtn>
        </NoProductContainer>
    )
}

export default Cart
