import { Footer, Navbar } from '../components'
import styled from 'styled-components'
import {
    Check,
    Email,
    LocationOn,
    Notifications,
    Person,
    RateReview,
    Search,
    Store,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'

const Wrapper = styled.div`
    width: 93vw;
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
`
const Sidebar = styled.div`
    flex: 1;
    color: #333;
    padding-right: 20px;
`
const SidebarTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 10px 10px;
`
const NavContainer = styled.nav`
    list-style: none;
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
    }
`
const SearchOrderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 35%;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    padding-right: 5px;
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
`
const OrdersList = styled.div`
    margin-top: 15px;
`
const SingleOrder = styled.div`
    border: 1px solid #e2e2e2;
    border-radius: 5px;
`
const OrderInfoHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e2e2e2;
`
const OrderInfoTitleContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const OrderInfoTitle = styled.span`
    color: #666;
    font-size: 13px;
    font-weight: 600;
`
const OrderInfoDesc = styled.span`
    color: #333;
    font-size: 13px;
    font-weight: 400;
`
const OrderDetailsBtn = styled.button`
    padding: 5px 30px;
    background-color: #eea287;
    border: 1px solid #eea287;
    border-radius: 3px;
    transition: all 0.2s ease-in;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    &:hover {
        background-color: #d98668;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }
`
const OrderInfoBody = styled.div`
    padding: 20px;
`
const OrderInfoBodyContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e2e2e2;
    padding: 17px 20px;
    border-radius: 5px;
`
const OrderStatusContainer = styled.div`
    width: 50%;
`
const OrderStatus = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #0bc15c;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`
const OrderStatusInfo = styled.p`
     font-size: 12px;
    font-weight: 600;
    color: #333;
`
const OrderImageContainer = styled.div`
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 3px;
`
const OrderImageWrapper = styled.div`
    height: 60px;
    width: 40px;
`
const OrderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Orders = () => {
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
                            <SingleOrder>
                                <OrderInfoHeader>
                                    <OrderInfoTitleContainer>
                                        <OrderInfoTitle>
                                            Order date
                                        </OrderInfoTitle>
                                        <OrderInfoDesc>
                                            1 March 2021 - 14:45
                                        </OrderInfoDesc>
                                    </OrderInfoTitleContainer>
                                    <OrderInfoTitleContainer>
                                        <OrderInfoTitle>Buyer</OrderInfoTitle>
                                        <OrderInfoDesc>
                                            James Edgerton
                                        </OrderInfoDesc>
                                    </OrderInfoTitleContainer>
                                    <OrderInfoTitleContainer>
                                        <OrderInfoTitle>
                                            Order total
                                        </OrderInfoTitle>
                                        <OrderInfoDesc>$ 159.98</OrderInfoDesc>
                                    </OrderInfoTitleContainer>
                                    <OrderDetailsBtn>
                                        Order Details
                                    </OrderDetailsBtn>
                                </OrderInfoHeader>
                                <OrderInfoBody>
                                    <OrderInfoBodyContainer>
                                        <OrderStatusContainer>
                                            <OrderStatus>
                                                <Check sx={{marginRight: '7px'}} />
                                                Delivered
                                            </OrderStatus>
                                            <OrderStatusInfo>
                                                1 product was delivered on
                                                February 5th.
                                            </OrderStatusInfo>
                                        </OrderStatusContainer>
                                        <OrderImageContainer>
                                            <OrderImageWrapper>
                                                <OrderImage src="https://cdn.dsmcdn.com/ty61/product/media/images/20210122/8/56024496/86055368/1/1_org_zoom.jpg" />
                                            </OrderImageWrapper>
                                        </OrderImageContainer>
                                    </OrderInfoBodyContainer>
                                </OrderInfoBody>
                            </SingleOrder>
                        </OrdersList>
                    </MyOrders>
                </Main>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Orders
