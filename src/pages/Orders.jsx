import { Footer, Navbar, Order } from '../components'
import styled from 'styled-components'
import {
    Email,
    LocationOn,
    Notifications,
    Person,
    RateReview,
    Search,
    Store,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { mobile } from '../responsive'

const Wrapper = styled.div`
    width: 93vw;
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
    ${mobile({ flexDirection: 'column' })}
`
const Sidebar = styled.div`
    flex: 1;
    color: #333;
    padding-right: 20px;
    ${mobile({ padding: '10px' })}
`
const SidebarTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 10px 10px;
`
const NavContainer = styled.nav`
    list-style: none;
    ${mobile({ display: 'flex', flexDirection: 'column' })}
`
const StyledNavIcon = styled(SvgIcon)`
    font-size: 18px !important;
    color: #999;
    margin-right: 10px;
`
const NavItem = styled.li`
    font-size: 14px;
    font-weight: 400;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #f2f2f2;
    }
    &:hover ${StyledNavIcon} {
        color: #eea287;
    }
    /* ${mobile({ justifyContent: 'center' })} */
`
const Main = styled.main`
    flex: 4;
    margin-bottom: 30px;
`

// ==============================================My Orders

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
        border: 2px solid #eea287;
        color: #eea287;
        transition: all 0.2s ease-in;
    }

    ${mobile({
        fontSize: '11px',
        fontWeight: '400',
        padding: '2px 10px',
        backgroundColor: '#eea287',
        color: '#fff',
    })}
`
const OrdersList = styled.div`
    margin-top: 15px;
`

const Orders = () => {
    const [orders, setOrders] = useState([])
    let user = useSelector((state) => state.user.user)
    useEffect(() => {
        const getAllOrders = async () => {
            const res = await axios.get(
                'http://localhost:5000/api/orders/find/' + user._id
            )
            setOrders(res.data)
        }
        getAllOrders()
    }, [])

    return (
        <>
            <Navbar />
            <Wrapper>
                <Sidebar>
                    <SidebarTitle>My profile</SidebarTitle>
                    <NavContainer>
                        <NavItem>
                            <StyledNavIcon component={Store} />
                            My orders
                        </NavItem>
                        <NavItem>
                            <StyledNavIcon component={RateReview} />
                            My reviews
                        </NavItem>
                        <NavItem>
                            <StyledNavIcon component={Email} />
                            My messages
                        </NavItem>
                        <NavItem>
                            <StyledNavIcon component={Person} />
                            My user information
                        </NavItem>
                        <NavItem>
                            <StyledNavIcon component={LocationOn} />
                            My adresses
                        </NavItem>
                        <NavItem>
                            <StyledNavIcon component={Notifications} />
                            Settings
                        </NavItem>
                    </NavContainer>
                </Sidebar>
                <Main>
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
                                        color: '#eea287',
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
                                <OrderDateOption value="all">
                                    2021
                                </OrderDateOption>
                            </SearchByDate>
                        </OrderHeader>
                        <OrderFilterContainer>
                            <OrderFilterBtn>All</OrderFilterBtn>
                            <OrderFilterBtn>Ongoing Orders</OrderFilterBtn>
                            <OrderFilterBtn>Returns</OrderFilterBtn>
                            <OrderFilterBtn>Cancellations</OrderFilterBtn>
                        </OrderFilterContainer>
                        <OrdersList>
                            {orders.map((order) => (
                                <Order key={order._id} {...order} />
                            ))}
                        </OrdersList>
                    </MyOrders>
                </Main>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Orders
