import { NoOrders, Order, Spinner } from '../components'
import styled from 'styled-components'
import { Search } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { mobile } from '../responsive'

const MyOrders = styled.div``

const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    color: #333;
    h1 {
        font-size: 18px;
        font-weight: 400;
        ${mobile({ marginBottom: '20px' })}
    }
    ${mobile({ flexDirection: 'column' })}
`
const SearchOrderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 35%;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    padding-right: 5px;
    ${mobile({ marginBottom: '20px', width: '70%' })}
`
const SearchOrder = styled.input`
    font-size: 12px;
    font-weight: 700;
    padding: 7px 10px;
    width: 90%;
    border: none;
    &:focus {
        outline: none;
    }

    &:focus ${SearchOrderContainer} {
        box-shadow: 2px 2px 2px 10px rgba(0, 0, 0, 0.75);
    }
`
const SearchByDate = styled.select`
    border: 1px solid #e2e2e2;
    padding: 7px 10px;
    font-size: 12px;
    font-weight: 700;
    color: #333;
    &:focus {
        outline: none;
    }
`
const OrderDateOption = styled.option`
    color: #333;
`
const OrderFilterContainer = styled.div`
    margin-top: 20px;
    padding-left: 20px;
`
const OrderFilterBtn = styled.button`
    padding: 8px 21px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    font-weight: 500;
    background-color: transparent;
    margin-right: 10px;
    color: #666;
    transition: all 0.2s ease-in;

    &:hover {
        cursor: pointer;
        padding: 7px 20px;
        border: 2px solid #F27A1A;
        color: #F27A1A;
        transition: all 0.2s ease-in;
    }

    ${mobile({
        fontSize: '11px',
        fontWeight: '400',
        padding: '2px 10px',
        backgroundColor: '#F27A1A',
        color: '#fff',
    })}
`
const OrdersList = styled.div`
    margin-top: 15px;
`

const Orders = () => {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])
    let user = useSelector((state) => state.user.user)
    // console.log(orders.length ? 'true' : 'false')
    useEffect(() => {
        const getUserOrders = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:5000/api/orders/find/' + user._id
                )
                setLoading(false)
                setOrders(res.data)
            } catch (err) {
                setLoading(false)
                throw new Error(err)
            }
        }
        getUserOrders()
    }, [])

    return (
        <>
            <MyOrders>
                <OrderHeader>
                    <h1>My Orders</h1>
                    <SearchOrderContainer>
                        <SearchOrder
                            type="text"
                            placeholder="Product or brand name"
                        />
                        <Search
                            sx={{
                                fontSize: 20,
                                color: '#F27A1A',
                                cursor: 'pointer',
                            }}
                        />
                    </SearchOrderContainer>
                    <SearchByDate>
                        <OrderDateOption value="all">
                            All orders
                        </OrderDateOption>
                        <OrderDateOption value="all">
                            Last 1 month
                        </OrderDateOption>
                        <OrderDateOption value="all">
                            Last 3 month
                        </OrderDateOption>
                        <OrderDateOption value="all">2021</OrderDateOption>
                    </SearchByDate>
                </OrderHeader>
                <OrderFilterContainer>
                    <OrderFilterBtn>All</OrderFilterBtn>
                    <OrderFilterBtn>Ongoing Orders</OrderFilterBtn>
                    <OrderFilterBtn>Returns</OrderFilterBtn>
                    <OrderFilterBtn>Cancellations</OrderFilterBtn>
                </OrderFilterContainer>
                <OrdersList>
                    {loading ? (
                        <Spinner />
                    ) : orders.length ? (
                        orders.map((order) => (
                            <Order key={order._id} {...order} />
                        ))
                    ) : (
                        <NoOrders />
                    )}
                </OrdersList>
            </MyOrders>
        </>
    )
}

export default Orders
