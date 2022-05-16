import { format, parseISO } from 'date-fns'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { OrderStatus } from '../components'
import { mobile } from '../responsive'

const SingleOrder = styled.div`
    border: 1px solid #e2e2e2;
    border-radius: 5px;
`
const OrderInfoHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e2e2e2;
    ${mobile({ flexDirection: 'column', alignItems: 'flex-start', gap: '7px' })}
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
    ${mobile({ justifyContent: 'space-between', padding: '5px' })}
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

const Order = ({ amount, products, status, createdAt }) => {
    let user = useSelector(state => state.user.user)
    let orderDate = format(parseISO(createdAt), "d MMMM y '-' k:m")
    return (
        <SingleOrder>
            <OrderInfoHeader>
                <OrderInfoTitleContainer>
                    <OrderInfoTitle>Order date</OrderInfoTitle>
                    <OrderInfoDesc>{orderDate}</OrderInfoDesc>
                </OrderInfoTitleContainer>
                <OrderInfoTitleContainer>
                    <OrderInfoTitle>Buyer</OrderInfoTitle>
                    <OrderInfoDesc>{user.username}</OrderInfoDesc>
                </OrderInfoTitleContainer>
                <OrderInfoTitleContainer>
                    <OrderInfoTitle>Order total</OrderInfoTitle>
                    <OrderInfoDesc>$ {amount}</OrderInfoDesc>
                </OrderInfoTitleContainer>
                <OrderDetailsBtn>Order Details</OrderDetailsBtn>
            </OrderInfoHeader>
            <OrderInfoBody>
                <OrderInfoBodyContainer>
                    <OrderStatus status={status} orderDate={orderDate} />
                    {products.map((product) => (
                        <OrderImageContainer key={product.id}>
                            <OrderImageWrapper>
                                <OrderImage src="https://cdn.dsmcdn.com/ty61/product/media/images/20210122/8/56024496/86055368/1/1_org_zoom.jpg" />
                            </OrderImageWrapper>
                        </OrderImageContainer>
                    ))}
                </OrderInfoBodyContainer>
            </OrderInfoBody>
        </SingleOrder>
    )
}

export default Order
