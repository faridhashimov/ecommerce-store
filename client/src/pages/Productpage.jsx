import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import {
    Footer,
    Navbar,
    Spinner,
    DeliveryAndPayment,
    ProductBackground,
    ProductReviews,
    Details,
    ProductInfo,
    ErrorMsg,
} from '../components'
import useEcomService from '../services/useEcomService'

const Wrapper = styled.div`
    width: 93vw;
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
`

const OtherInfo = styled.div`
    padding: 20px 0px;
`
const MainInfo = styled.div`
    border: 1px solid #ccc;
    border-radius: 3px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const OtherInfoBtn = styled.button`
    font-size: 16px;
    padding: 7px 25px;
    margin: 0px 10px;
    background-color: transparent;
    border: transparent;
    transition: all 0.2s ease-in;
    cursor: pointer;
    ${(props) => {
        if (props.bb) {
            return css`
                border-bottom: 2px solid #f27a1a;
                transition: all 0.2s ease-in;
            `
        } else {
            return css`
                border-bottom: 2px solid #fff;
                transition: all 0.2s ease-in;
            `
        }
    }}
    &:hover {
        color: #f27a1a;
        transition: all 0.2s ease-in;
        border-bottom: 2px solid #f27a1a;
    }
`
const InfoContainer = styled.div`
    padding: 30px 30px 10px;
`

const Productpage = () => {
    const [product, setProduct] = useState(null)
    const [otherInfo, setOtherInfo] = useState('delivery')
    const user = useSelector((state) => state.user.user)
    const { id } = useParams()

    const { loading, error, getProduct } = useEcomService()

    useEffect(() => {
        onProductLoad(id)
    }, [])

    const onProductLoad = (id) => {
        getProduct(id).then((product) => {
            setProduct(product)
        })
    }

    return (
        <>
            <Navbar />
            <Wrapper>
                {loading ? (
                    <Spinner />
                ) : !loading && product ? (
                    <>
                        <ProductInfo product={product} />
                        <OtherInfo>
                            <ButtonContainer>
                                <OtherInfoBtn
                                    bb={otherInfo === 'details' ? true : false}
                                    onClick={() => setOtherInfo('details')}
                                >
                                    DETAILS
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={otherInfo === 'delivery' ? true : false}
                                    onClick={() => setOtherInfo('delivery')}
                                >
                                    DELIVERY AND PAYMENT
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={
                                        otherInfo === 'background'
                                            ? true
                                            : false
                                    }
                                    onClick={() => setOtherInfo('background')}
                                >
                                    PRODUCT BACKGROUND
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={otherInfo === 'reviews' ? true : false}
                                    onClick={() => setOtherInfo('reviews')}
                                >
                                    REVIEWS ({product.reviews?.length})
                                </OtherInfoBtn>
                            </ButtonContainer>
                            <MainInfo>
                                <InfoContainer>
                                    {otherInfo === 'details' ? (
                                        <Details />
                                    ) : otherInfo === 'delivery' ? (
                                        <DeliveryAndPayment />
                                    ) : otherInfo === 'background' ? (
                                        <ProductBackground />
                                    ) : (
                                        <ProductReviews
                                            reviews={product.reviews}
                                        />
                                    )}
                                </InfoContainer>
                            </MainInfo>
                        </OtherInfo>
                    </>
                ) : (
                    <ErrorMsg />
                )}
            </Wrapper>
            <Footer />
        </>
    )
}

export default Productpage
