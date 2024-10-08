import {
  Navbar,
  Footer,
  ErrorMsg,
  Spinner,
  UpdateCartModal,
} from '../components';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mobile } from '../responsive';
import CartProducts from '../components/CartProducts';
import { format, parseISO } from 'date-fns';

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import {
  decreaseQt,
  deleteFromCart,
  increaseQt,
  resetCart,
} from '../redux/cartSlice';
import { selectProducts, selectUser } from '../redux/selectors';
import Portal from '../Portal';
import {
  useCreateNewOrderMutation,
  useDeleteProductFromCartMutation,
  useLazyGetUserCartQuery,
  useUpdateCartMutation,
} from '../redux/ecommerceApi';

const Container = styled.div`
  width: 100%;
`;
const CarteHeader = styled.div`
  height: 200px;
  width: 100%;
  background: url('https://d-themes.com/react/molla/demo-8/images/page-header-bg.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const HeaderTitle = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  color: #232323;
  text-align: center;
  span {
    font-weight: 400;
    font-size: 20px;
    color: #f27a1a;
  }
`;
const CartBody = styled.div`
  width: 93vw;
  min-height: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const ProductsList = styled.div`
  flex: 5;
`;
const ProductsListHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  ${mobile({ display: 'none', marginBottom: '5px' })}
`;
const Element = styled.div`
  flex: ${(props) => props.fl};
  background-color: ${(props) => props.bg};
  font-size: 15px;
  color: #999;
  padding: 20px 0px;
`;
const ProductsListBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 5;
  ${mobile({ border: '1px solid #efefef' })}
`;
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
`;
const GoShopBtn = styled(Link)`
  padding: 7px 45px;
  background-color: #f27a1a;
  border: 1px solid #f27a1a;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  text-decoration: none;
  &:hover {
    background-color: #f08936;
  }
`;
const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  ${mobile({ flexDirection: 'column', alignItems: 'stretch' })}
`;
const CheckoutContainer = styled.div`
  flex: 2;
  padding-left: 10px;
  ${mobile({ padding: '0px' })}
`;
const Checkout = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
  padding: 15px 0px;
`;
const CheckoutBody = styled.div`
  width: 85%;
`;
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
`;
const ShippingAdress = styled(ChekoutItem)`
  display: flex;
  flex-direction: column;
  padding: 25px 0px;
  border-bottom: 1px solid #ccc;
`;
const InputContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
const RadioInput = styled.input`
  &:checked {
    color: #f27a1a;
  }
`;
const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 300;
  color: #333;
  margin-left: 10px;
`;
const Discount = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #333;
`;
const ChangeAdress = styled(Link)`
  display: inline-block;
  color: #ccc;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
  transition: all 0.2s ease-in;
  &:hover {
    color: #f27a1a;
    transition: all 0.2s ease-in;
  }
`;
const Total = styled(ChekoutItem)`
  h1 {
    color: #f27a1a;
  }
  color: #f27a1a;
  padding: 25px 0px;
`;
const CheckoutBtn = styled.button`
  text-transform: uppercase;
  border: 1px solid #f27a1a;
  outline: none;
  color: #f27a1a;
  cursor: pointer;
  width: 100%;
  padding: 7px 30px;
  background-color: transparent;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #f08936;
    transition: all 0.2s ease-in;
    color: #fff;
  }
`;
export const Cart = () => {
  const [shipping, setShipping] = useState(0);
  const [open, setOpen] = useState(false);
  const products = useSelector(selectProducts);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [
    getUserCart,
    {
      isLoading: isCartLoading,
      isError: isCartError,
      data: cart = { products: [] },
    },
  ] = useLazyGetUserCartQuery();

  useEffect(() => {
    if (user) {
      getUserCart(user._id);
    }
  }, [user, getUserCart]);

  const cartProducts = user ? cart.products : products;

  const [
    deleteProduct,
    { isLoading: isDeleteLoading, isError: isDeleteError },
  ] = useDeleteProductFromCartMutation();

  const [createNewOrder, { isLoading, isError }] = useCreateNewOrderMutation();

  const totalSum = user
    ? cart.products
        .reduce(
          (sum, prevValue) => sum + prevValue.price * prevValue.quantity,
          0
        )
        .toFixed(2)
    : products.reduce((sum, prevValue) => sum + prevValue.total, 0).toFixed(2);
  const cartTotal = (+totalSum + +shipping).toFixed(2);

  const handleRadioChange = (e) => {
    setShipping(e.target.value);
  };

  const handleCheckout = () => {
    !user ? navigate('/login') : setOpen(true);
  };

  const createOrder = async (data) => {
    const body = {
      _id: data.id,
      userId: user._id,
      userFirstName: data.payer.name.given_name,
      userLastName: data.payer.name.surname,
      userEmail: data.payer.email_address,
      products: cartProducts,
      adress: {
        phone: data.payer.phone.phone_number.national_number,
        city: data.purchase_units[0].shipping.address.admin_area_2,
        street: data.purchase_units[0].shipping.address.address_line_1,
        zipcode: data.payer.address.postal_code,
      },
      amount: data.purchase_units[0].amount.value,
    };

    try {
      const res = await createNewOrder(body).unwrap();
      dispatch(resetCart());
      navigate('/success', {
        state: {
          id: res._id,
          products: res.products,
          amount: res.amount,
          status: res.status,
          buyer: data.purchase_units[0].shipping.name.full_name,
          orderDate: format(parseISO(res.createdAt), "d MMMM y '-' k:m"),
        },
      });
    } catch (err) {
      throw new Error('Something went wrong');
    }
  };

  // This values are the props in the UI
  const amount = cartTotal;
  const currency = 'USD';
  const style = { layout: 'vertical' };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

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
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              createOrder(details);
            });
          }}
        />
      </>
    );
  };

  // Updating cart
  const [
    updateProduct,
    { isLoading: isCartUpdateLoading, isError: isCartUpdateError },
  ] = useUpdateCartMutation();

  const handleClick = async (exp, product) => {
    try {
      if (exp === 'dec') {
        if (user) {
          await updateProduct({
            type: 'dec',
            userId: user._id,
            productId: product._id,
          }).unwrap();
        } else {
          product.quantity > 1 && dispatch(decreaseQt(product));
        }
      } else {
        if (user) {
          await updateProduct({
            type: 'inc',
            userId: user._id,
            productId: product._id,
          }).unwrap();
        } else {
          dispatch(increaseQt(product));
        }
      }
    } catch (error) {}
  };
  const handleDelete = async (product) => {
    try {
      if (user) {
        await deleteProduct({
          userId: user._id,
          productId: product._id,
        });
      } else {
        dispatch(deleteFromCart(product));
      }
    } catch (error) {}
  };

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
          {isCartLoading ? (
            <Spinner />
          ) : isCartError ? (
            <ErrorMsg />
          ) : cartProducts.length === 0 ? (
            <NoProduct />
          ) : (
            <Wrapper>
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
                      <Element fl="1">{/* <span>Total</span> */}</Element>
                    </ProductsListHeader>
                    {cartProducts.map((item, i) => (
                      <CartProducts
                        key={i}
                        item={item}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                      />
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
                              checked={+shipping === 0 ? true : false}
                              onChange={handleRadioChange}
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
                              checked={+shipping === 10 ? true : false}
                              onChange={handleRadioChange}
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
                              checked={+shipping === 20 ? true : false}
                              onChange={handleRadioChange}
                              id="express"
                              type="radio"
                              value={20}
                            />
                            <InputLabel htmlFor="express">Express:</InputLabel>
                          </InputContainer>
                          <Discount>$20.00</Discount>
                        </ChekoutItem>
                        <ShippingAdress>
                          <h1>Estimate for Your Country</h1>
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
                          <CheckoutBtn onClick={handleCheckout}>
                            Proceed To Checkout
                          </CheckoutBtn>
                        )}
                      </CheckoutBody>
                    </Checkout>
                  </CheckoutContainer>
                </OrderInfo>
              </ProductsList>
            </Wrapper>
          )}
        </CartBody>
        <Footer />
      </Container>
      {(isCartUpdateLoading || isDeleteLoading) && (
        <Portal>
          <UpdateCartModal />
        </Portal>
      )}
    </>
  );
};

const NoProduct = () => {
  return (
    <NoProductContainer>
      <ShoppingCartOutlined sx={{ fontSize: '140px', color: '#666' }} />
      <span>No products added to cart</span>
      <GoShopBtn to="/">Return to Shop</GoShopBtn>
    </NoProductContainer>
  );
};
