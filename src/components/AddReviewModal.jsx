import { Close, Star, StarBorder, ThumbUp } from '@mui/icons-material'
import { Icon, SvgIcon } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import AddReview from './AddReview'

//====================== Modal background
const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
`

//====================== Modal container
const ModalContainer = styled.div`
    position: relative;
    min-height: 83%;
    width: 33.3%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 20px;
    border-radius: 3px;
`

const ModalInfo = styled.div`
    flex: 1;
    padding-left: 15px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ebebeb;
        border-radius: 4px;
    }
`

const StyledIcon = styled(Icon)`
    font-size: 16px !important;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        color: #eea287;
    }
`

//=================== Modal header
const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
`
const ModalHeaderTitle = styled.h1`
    font-size: 16px;
    font-weight: 600;
`
//=====================Modal Body
const ModalBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

//=====================Point Info Container
const PointInfoContainer = styled.div``
const PointInfoBody = styled.div`
    background-color: #ffeada;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #fff;
`
const PointInfo = styled.div`
    p {
        font-size: 10px;
        font-weight: 600;
        color: #333;
        span {
            color: #F27A1A;
        }
    }
`

//Product Info Container

const ProductInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
`
const ProductImageContainer = styled.div`
    height: 130px;
    width: 90px;
    border: 1px solid #ccc;
`
const ProductImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`
const ProductInfo = styled.div`
    margin-left: 15px;
`
const ProductTitleContainer = styled.div``
const ProductBrand = styled.h3`
    font-size: 16px;
    font-weight: 600;
`
const ProductTitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #666;
`
const RatingContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 7px 0px;
    span {
        font-size: 14px;
        font-weight: 300;
        color: #333;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const AddReviewForm = styled.form``
const TexteareLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
        color: #333;
        font-size: 14px;
        font-weight: 500;
    }
    span {
        color: #333;
        font-size: 12px;
        font-weight: 400;
        text-decoration: underline;
    }
`
const ReviewInput = styled.textarea`
    padding: 10px;
    margin: 7px 0px 20px;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 12px;
    color: #666;
    &:focus {
        outline: none;
    }
`
const ReviewPolicyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const ReviewPolicyLabel = styled.label`
    font-size: 12px;
    font-weight: 600;
    margin-left: 5px;
`
const ReviewPolicy = styled.input``
const SubmitBtn = styled.button`
    width: 100%;
    padding: 7px 0px;
    background-color: #f27a1a;
    border: 1px solid #f27a1a;
    margin-top: 15px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: all .2s ease-in;
    &:hover {
        background-color: #ef964d;
        transition: all .2s ease-in;
    }
`
//=================Review Rating Container

const AddReviewModal = ({ setOpen }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleModalClose = (e) => {
        let modalBg = e.target.getAttribute('data-bg')
        if (modalBg !== 'modal-bg') {
            return
        } else {
            setOpen(false)
        }
    }
    return (
        <ModalBackground data-bg="modal-bg" onClick={handleModalClose}>
            <ModalContainer>
                {/* Modal Header */}
                <ModalHeader>
                    <ModalHeaderTitle>
                        How would you rate this product
                    </ModalHeaderTitle>

                    <Close
                        sx={{
                            color: '#1b1b1b',
                            fontSize: '18px',
                            cursor: 'pointer',
                        }}
                        onClick={() => setOpen(false)}
                    />
                </ModalHeader>
                <PointInfoContainer>
                    <PointInfoBody>
                        <IconContainer>
                            {' '}
                            <ThumbUp
                                sx={{
                                    color: '#F27A1A',
                                    fontSize: '25px',
                                }}
                            />
                        </IconContainer>
                        <PointInfo>
                            <p>
                                When your review will approve, you will see <span>25 </span> 
                                Points in your account. If your review gets 3
                                likes, you will get <span>+50</span> Points!{' '}
                            </p>
                        </PointInfo>
                    </PointInfoBody>
                    <ProductInfoContainer>
                        <ProductImageContainer>
                            <ProductImage src="https://cdn.dsmcdn.com/ty61/product/media/images/20210122/8/56024496/86055368/1/1_org_zoom.jpg" />
                        </ProductImageContainer>
                        <ProductInfo>
                            <ProductTitleContainer>
                                <ProductBrand>MANGO Man</ProductBrand>
                                <ProductTitle>
                                    Erkek Gri Dar Kesimli Kalipli Pamuklu
                                    Pantolon
                                </ProductTitle>
                            </ProductTitleContainer>
                            <RatingContainer>
                                <div>
                                    {[...Array(5)].map((star, i) => {
                                        i += 1
                                        return (
                                            <SvgIcon
                                                key={i}
                                                sx={{
                                                    color: '#eea287',
                                                    fontSize: '25px',
                                                    marginRight: '7px',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        color: '#eea287',
                                                    },
                                                }}
                                                component={
                                                    i <= (hover || rating)
                                                        ? Star
                                                        : StarBorder
                                                }
                                                onClick={() => setRating(i)}
                                                onMouseEnter={() => setHover(i)}
                                                onMouseLeave={() =>
                                                    setHover(rating)
                                                }
                                            />
                                        )
                                    })}
                                </div>
                            </RatingContainer>
                        </ProductInfo>
                    </ProductInfoContainer>
                </PointInfoContainer>
                <ModalBody>
                    <AddReviewForm>
                        <TexteareLabel htmlFor="review">
                            <h3>Your Review</h3>
                            <span>Review Posting Criteria</span>
                        </TexteareLabel>
                        <ReviewInput id="review" cols="58" rows="4" />
                        <ReviewPolicyContainer>
                            <ReviewPolicy type="checkbox" />
                            <ReviewPolicyLabel>
                                I accept the User Agreement to add review.
                            </ReviewPolicyLabel>
                        </ReviewPolicyContainer>
                        <SubmitBtn>Add Review</SubmitBtn>
                    </AddReviewForm>
                </ModalBody>
            </ModalContainer>
        </ModalBackground>
    )
}

export default AddReviewModal