import {
    Star,
    StarBorder,
    StarHalf,
    StarOutline,
    ThumbDownAltOutlined,
    ThumbUpOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'
import ProductRate from './ProductRate'

const Info = styled.div``
const InfoPart = styled.div`
    margin-bottom: 20px;
    p {
        color: #666;
        font-size: 15px;
        font-weight: 300;
    }
`
const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Review = styled.div`
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 20px;
`
const User = styled.div`
    flex: 1;
`
const ReviewInfo = styled.div`
    flex: 5;
`
const ReviewTitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 10px;
`
const ReviewText = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #777;
    margin-bottom: 15px;
`
const ReviewUsefullnes = styled.div`
    display: flex;
    justify-content: flex-start;
`
const UsefullnessBtn = styled.button`
    background-color: transparent;
    border: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 300;
    cursor: pointer;
    span {
        margin-left: 5px;
    }
    &:hover {
        color: #F27A1A;
    }
`
const Username = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 10px;
`
const Rate = styled.div`
    display: flex;
    justify-content: flex-start;
`
const ReviewDate = styled.span`
    color: #cfdbed;
    font-size: 14px;
    font-weight: 300;
`

const ProductReviews = ({ reviews }) => {
    // const rating = reviews ? reviews.reduce((a,c) => c.rating + a, 0) / reviews.length : null
    // console.log(reviews)
    // console.log(rating)
    return (
        <Info>
            <InfoPart>
                <p>
                    <strong>Reviews ({reviews?.length})</strong>: <br />
                </p>
            </InfoPart>
            <ReviewsContainer>
                {reviews?.map((review) => (
                    <Review key={review._id}>
                        <User>
                            <Username>{review.name}</Username>
                            <Rate>
                                <ProductRate rate={review.rating} />
                            </Rate>
                            <ReviewDate>
                                {review.createdAt.substr(0, 10)}
                            </ReviewDate>
                        </User>
                        <ReviewInfo>
                            <ReviewTitle>{review.title}</ReviewTitle>
                            <ReviewText>{review.desc}</ReviewText>
                            <ReviewUsefullnes>
                                <UsefullnessBtn>
                                    <ThumbUpOutlined
                                        sx={{ fontSize: '16px', color: '#333' }}
                                    />
                                    <span>Helpfull</span>
                                </UsefullnessBtn>
                                <UsefullnessBtn>
                                    <ThumbDownAltOutlined
                                        sx={{
                                            fontSize: '16px',
                                            color: '#333'
                                        }}
                                    />
                                    <span>Unhelpfull</span>
                                </UsefullnessBtn>
                            </ReviewUsefullnes>
                        </ReviewInfo>
                    </Review>
                ))}
            </ReviewsContainer>
        </Info>
    )
}

export default ProductReviews
