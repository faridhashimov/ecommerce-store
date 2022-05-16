import { Navbar, Footer } from '../components'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { mobile } from '../responsive'
import { userRequest } from '../requestMethods'
import CartProducts from '../components/CartProducts'
import axios from 'axios'
import { format, parseISO } from 'date-fns'

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import { resetCart } from '../redux/cartSlice'

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
    /* height: 540px; */
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
const CheckoutModal = styled.div`
    position: fixed;
    top: 0;
    /* left: 0; */
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    display: ${(props) => props.ds};
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    z-index: 999;
`
const CheckoutModalBody = styled.div`
    background-color: #ccc;
    padding: 20px;
    margin: 0 auto;
    height: 50vh;
    margin-top: 170px;
`
const CloseBtn = styled.span`
    float: right;
`

const Cart = () => {
    const [shipping, setShipping] = useState(0)
    const [open, setOpen] = useState(false)
    const [checkout, setCheckout] = useState(false)
    const products = useSelector((store) => store.cart.products)
    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalSum = products
        .reduce((sum, prevValue) => sum + prevValue.total, 0)
        .toFixed(2)
    const cartTotal = parseFloat(totalSum + shipping).toFixed(2)

    // const total = parseFloat(totalSum + shipping).toFixed(2)

    const handleRadioChange = (e) => {
        setShipping(e.target.value)
    }

    const handlecClick = () => {
        !user && navigate('/login')
        setOpen(true)
    }

    const createOrder = async (data) => {
        const body = {
            userId: user._id,
            products: products,
            adress: `${data.payer.address.address_line_1},
                ${data.payer.address.admin_area_2},
                ${data.payer.address.postal_code}`,
            amount: data.purchase_units[0].amount.value,
        }

        try {
            const res = await axios.post(
                'http://localhost:5000/api/orders',
                body,
                {
                    headers: { 'Content-type': 'application/json' },
                }
            )
            dispatch(resetCart())
            navigate('/success', {
                state: {
                    products: res.data.products,
                    amount: res.data.amount,
                    status: res.data.status,
                    buyer: data.purchase_units[0].shipping.name.full_name,
                    orderDate: format(
                        parseISO(res.data.createdAt),
                        "d MMMM y '-' k:m"
                    ),
                },
            })
        } catch (err) {
            throw new Error('Something went wrong')
        }
    }

    // This values are the props in the UI
    const amount = cartTotal
    const currency = 'USD'
    const style = { layout: 'vertical' }

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

        useEffect(() => {
            dispatch({
                type: 'resetOptions',
                value: {
                    ...options,
                    currency: currency,
                },
            })
        }, [currency, showSpinner])

        return (
            <>
                {showSpinner && isPending && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId
                            })
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            console.log(details)
                            createOrder(details)
                        })
                    }}
                />
            </>
        )
    }

    return (
        <>
            <Container>
                <Navbar />
                <CarteHeader>
                    <HeaderTitle>
                        Shopping Cart <br /> <span>Shop</span>
                    </HeaderTitle>
                </CarteHeader>
                <CartBody>
                    <Wrapper>
                        {products.length === 0 ? (
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
                                        {products.map((item, i) => (
                                            <CartProducts key={i} item={item} />
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
                                                                +shipping === 0
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
                                                                +shipping === 10
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
                                                                +shipping === 20
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
                                                        Estimate for Your
                                                        Country
                                                    </h1>
                                                    <ChangeAdress to="/adress">
                                                        Change Adress
                                                    </ChangeAdress>
                                                </ShippingAdress>
                                                <Total>
                                                    <h1>Total:</h1>
                                                    <span>${cartTotal}</span>
                                                </Total>
                                                {open ? (
                                                    <PayPalScriptProvider
                                                        options={{
                                                            'client-id':
                                                                'AdJDuR9Tp6c1_n7WbFYidv1YO-s4zJkV70g3uGwRNmUwKjTP8MLaEZq3IRcFK_HUbSoB5rWQEOQXYoRf',
                                                            // components: 'buttons',
                                                            currency: 'USD',
                                                        }}
                                                    >
                                                        <ButtonWrapper
                                                            currency={currency}
                                                            showSpinner={true}
                                                        />
                                                    </PayPalScriptProvider>
                                                ) : (
                                                    <CheckoutBtn
                                                        onClick={
                                                            handlecClick
                                                            // setOpen(true)
                                                        }
                                                    >
                                                        Proceed To Checkout
                                                    </CheckoutBtn>
                                                )}
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
            {/* <CheckoutModal ds={checkout ? 'inline-block' : 'none'}>
                <CheckoutModalBody>
                    <CloseBtn onClick={onCloseCartModal}>x</CloseBtn>
                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    )}
                </CheckoutModalBody>
            </CheckoutModal> */}
        </>
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
