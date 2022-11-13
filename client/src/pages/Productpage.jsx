import { useEffect, useState } from 'react'
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
import { mobile } from '../responsive'
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
    ${mobile({ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' })}
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
    ${mobile({ fontSize: '15px', margin: '10px 0px 0px 0px', padding: '0px' })}
`
const InfoContainer = styled.div`
    padding: 30px 30px 10px;
`

const Productpage = () => {
    const [product, setProduct] = useState(null)
    const [otherInfo, setOtherInfo] = useState('delivery')
    const { id } = useParams()

    const { loading, getProduct } = useEcomService()

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
                                    Details
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={otherInfo === 'delivery' ? true : false}
                                    onClick={() => setOtherInfo('delivery')}
                                >
                                    Delivery & Payment
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={
                                        otherInfo === 'background'
                                            ? true
                                            : false
                                    }
                                    onClick={() => setOtherInfo('background')}
                                >
                                    Product Background
                                </OtherInfoBtn>
                                <OtherInfoBtn
                                    bb={otherInfo === 'reviews' ? true : false}
                                    onClick={() => setOtherInfo('reviews')}
                                >
                                    Reviews ({product.reviews?.length})
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
