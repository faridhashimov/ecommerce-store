import styled from 'styled-components'
import { mobile } from '../responsive'

const BottomInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    ${mobile({marginTop: '5px'})}
`
const BuyMorePayLes = styled.div`
    text-transform: uppercase;
    background-color: #fff;
    border: 1px solid #f27a1a;
    font-size: 12px;
    font-weight: 600;
    color: #f27a1a;
    padding: 2px 5px;
    border-radius: 4px;
`
const FastDelivery = styled.div`
    text-transform: uppercase;
    background-color: #3ec461;
    border: 1px solid #3ec461;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    padding: 2px 5px;
    border-radius: 4px;
`
const FreeCargo = styled.div`
    text-transform: uppercase;
    background-color: #535353;
    border: 1px solid #535353;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    padding: 2px 5px;
    border-radius: 4px;
`

const DiscountInfoComponent = ({ status }) => {
    return (
        <BottomInfoContainer>
            {status === 'Sale' ? (
                <BuyMorePayLes>Buy More Pay Less</BuyMorePayLes>
            ) : status === 'Top' ? (
                <FastDelivery>Fast Delivery</FastDelivery>
            ) : (
                <FreeCargo>Free Cargo</FreeCargo>
            )}
        </BottomInfoContainer>
    )
}

export default DiscountInfoComponent
