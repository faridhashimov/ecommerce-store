import {
    Autorenew,
    Cancel,
    Check,
    LocalShippingOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'
import { css } from 'styled-components'
import { mobile } from '../responsive'

const OrderStatusContainer = styled.div`
    width: 50%;
    ${mobile({ width: 'fit-content' })}
`
const OrderStatusStatus = styled.span`
    font-size: 14px;
    font-weight: 400;
    ${(props) => {
        if (props.status === 'Pending') {
            return css`
                color: #33ffbb;
            `
        } else if (props.status === 'Handed over to the local carrier') {
            return css`
                color: #8efb01;
            `
        } else if (props.status === 'Delivered') {
            return css`
                color: #33ff55;
            `
        } else {
            return css`
                color: #ff5733;
            `
        }
    }};
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    ${mobile({justifyContent: 'center'})}
`

const OrderStatusInfo = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #333;
`

const OrderStatus = ({ status, orderDate, products }) => {
    // const status = 'Cancelled'
    return (
        <OrderStatusContainer>
            {status === 'Pending' ? (
                <>
                    <OrderStatusStatus status={status}>
                        <Autorenew sx={{ marginRight: '7px' }} />
                        {status}
                    </OrderStatusStatus>
                    <OrderStatusInfo>
                        {products.length} product(s) Pending fulfillment.
                    </OrderStatusInfo>{' '}
                </>
            ) : status === 'Shipped' ? (
                <>
                    <OrderStatusStatus status={status}>
                        <LocalShippingOutlined sx={{ marginRight: '7px' }} />
                        {status}
                    </OrderStatusStatus>
                    <OrderStatusInfo>
                    {products.length} product(s) was handed over to the local carrier on February 5th.
                    </OrderStatusInfo>{' '}
                </>
            ) : status === 'Delivered' ? (
                <>
                    <OrderStatusStatus status={status}>
                        <Check sx={{ marginRight: '7px' }} />
                        {status}
                    </OrderStatusStatus>
                    <OrderStatusInfo>
                    {products.length} product(s) was delivered on February 5th.
                    </OrderStatusInfo>{' '}
                </>
            ) : (
                <>
                    <OrderStatusStatus status={status}>
                        <Cancel sx={{ marginRight: '7px' }} />
                        {status}
                    </OrderStatusStatus>
                    <OrderStatusInfo>
                        1 product was delivered on February 5th.
                    </OrderStatusInfo>{' '}
                </>
            )}
        </OrderStatusContainer>
    )
}

export default OrderStatus
