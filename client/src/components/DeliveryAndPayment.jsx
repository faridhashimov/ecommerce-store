import styled from 'styled-components'

const Info = styled.div``
const InfoPart = styled.div`
    margin-bottom: 10px;
    p {
        color: #666;
        font-size: 15px;
        font-weight: 300;
    }
`

const DeliveryAndPayment = () => {
    return (
        <Info>
            <InfoPart>
                <p>
                <strong>SHIPPING</strong>: <br /> Shipping is available to customers at least 13 years
                of age with a valid US shipping and billing address. 
                
                 
                </p>
            </InfoPart>
            <InfoPart>
                <p>
                <strong>RETURNS</strong>: <br /> Easy online returns within 30 days (return fee $5.99). Free
                return or exchange in-store with the exception of H&M HOME items
                purchased online.These items must be returned by mail only.
                </p>
            </InfoPart>
            <InfoPart>
                <p>
                <strong>PAYMENT</strong>: <br /> We accept card payments via Visa, Apple Pay,
                MasterCard, Discover and American Express. You can also pay with
                Klarna's flexible payment options, PayPal and H&M Gift Cards.
                Learn more on our customer service pages.
                </p>
            </InfoPart>
        </Info>
    )
}

export default DeliveryAndPayment
