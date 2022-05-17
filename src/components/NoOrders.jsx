import styled from 'styled-components'
import { Store } from '@mui/icons-material'

const NoOrdersContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
`
const OrderIconContainer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #fff4ec;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const NoOrderInfo = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;

`

const BackToAllBtn = styled.button`
    padding: 10px 47px;
    background-color: #eea287;
    border: 1px solid #eea287;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    transition: all .2s ease-in;
    &:hover{
        background-color: #f29573;
        transition: all .2s ease-in;
        cursor: pointer;
    }
`

const NoOrders = () => {
    return (
        <NoOrdersContainer>
            <OrderIconContainer>
                <Store sx={{fontSize: '35px', color: '#eea287'}} />
            </OrderIconContainer>
            <NoOrderInfo>You do not have an order.</NoOrderInfo>
            <BackToAllBtn>Back to All Orders</BackToAllBtn>
        </NoOrdersContainer>
    )
}

export default NoOrders
