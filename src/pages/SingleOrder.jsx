import { Check, ReceiptOutlined, Store } from '@mui/icons-material'
import axios from 'axios'
import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { OrderStatus, SingleOrderItem, Spinner } from '../components'
import { mobile } from '../responsive'

const MyOrders = styled.div`
    display: flex;
    flex-direction: column;
`
const OrderHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    color: #333;
    h1 {
        font-size: 18px;
        font-weight: 400;
        margin-right: 120px;
        ${mobile({ margin: '0px 0px 5px 0px' })}
    }
    ${mobile({ flexDirection: 'column' })}
`
const OrderHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    ${mobile({ flexDirection: 'column' })}
`
const OrderInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    margin: 0px 30px;
    ${mobile({ margin: '5px 0px;' })}
    span {
        font-size: 12px;
        font-weight: 600;
        color: #333;
    }
`
const OrderInfo = styled.div`
    margin: 20px 0px;
`
const OrderInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fafafa;
    border: 1px solid #e2e2e2;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 17px 15px;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`
const DeliveryContainer = styled.div`
    display: flex;
`
const OrderNo = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
    padding: 2px 0px 0px 0px;
    span {
        margin-top: 5px;
    }
`
const CargoCompanyContainer = styled.div`
    margin-left: 20px;
    /* margin-left: 20px; */
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    color: #666;
    padding: 0px 0px 0px 20px;
    span {
        font-size: 14px;
        font-weight: 500;
        color: #222;
        margin-top: 3px;
    }

    border-left: 1px solid #e2e2e2;
`
const CompanyLogoContainer = styled.div`
    height: 30px;
    width: 40px;
`
const CompanyLogo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`
const SendInvoice = styled.button`
    padding: 7px 10px;
    font-weight: 400;
    display: flex;
    /* align-items: center;  */
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        color: #eea287;
        border: 1px solid #eea287;
        transition: all 0.2s ease-in;
    }
`
const OrderInfoBody = styled.div`
    padding: 20px 15px;
    border: 1px solid #e2e2e2;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: none;
`
const OrderStatusContainer = styled.div`
    margin-bottom: 20px;
`
// const OrderStatus = styled.div`
//     color: #59c15c;
//     font-size: 14px;
//     font-weight: 600;
//     display: flex;
//     align-items: center;
// `
const OrderStatusDesc = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #333;
`
const OrdersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`
const OrderIconContainer = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SingleOrder = () => {
    const [order, setOrder] = useState(null)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:5000/api/orders/' + id
                )
                setOrder(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getOrder()
    }, [])

    console.log(order)

    return (
        <>
            <MyOrders>
                {!order ? (
                    <Spinner />
                ) : (
                    <>
                        <OrderHeader>
                            <h1>Order Details</h1>
                            <OrderHeaderInfo>
                                <OrderInfoItem>
                                    <span>Order date</span>
                                    {order &&
                                        format(
                                            parseISO(order.updatedAt),
                                            "d MMMM y '-' k:m"
                                        )}
                                    {/* {order.updatedAt} */}
                                </OrderInfoItem>
                                <OrderInfoItem>
                                    <span>Order No</span>
                                    {order._id}
                                </OrderInfoItem>
                                <OrderInfoItem>
                                    <span>Order info</span>3 Deliveries, 3
                                    Products
                                </OrderInfoItem>
                            </OrderHeaderInfo>
                        </OrderHeader>
                        <OrderInfo>
                            <OrderInfoHeader>
                                <HeaderLeft>
                                    <DeliveryContainer>
                                        <OrderIconContainer>
                                            <Store
                                                sx={{
                                                    fontSize: '25px',
                                                    color: '#eea287',
                                                }}
                                            />
                                        </OrderIconContainer>
                                        <OrderNo>
                                            Delivery No <span>609481035</span>
                                        </OrderNo>
                                    </DeliveryContainer>
                                    <CargoCompanyContainer>
                                        Cargo Company
                                        <span>United Parcel Service Inc.</span>
                                    </CargoCompanyContainer>
                                </HeaderLeft>
                                <HeaderRight>
                                    <SendInvoice>
                                        <ReceiptOutlined
                                            sx={{
                                                fontSize: '18px',
                                                color: '#eea287',
                                                marginRight: '5px',
                                            }}
                                        />
                                        Send Invoice
                                    </SendInvoice>
                                </HeaderRight>
                            </OrderInfoHeader>
                            <OrderInfoBody>
                                <OrderStatusContainer>
                                    <OrderStatus {...order} />
                                </OrderStatusContainer>
                                <OrdersContainer>
                                    {order.products.map((product) => (
                                        <SingleOrderItem
                                            key={product._id}
                                            {...product}
                                        />
                                    ))}
                                </OrdersContainer>
                            </OrderInfoBody>
                        </OrderInfo>
                    </>
                )}
            </MyOrders>
        </>
    )
}

export default SingleOrder
