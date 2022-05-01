import {
    StarOutline,
    ThumbDownAltOutlined,
    ThumbUpOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'

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
    border-bottom: 1px solid #EBEBEB;
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
    color: #333;
    margin-bottom: 10px;
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
    span {
        margin-left: 5px;
    }
`
const Username = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 10px;
`
const Rate = styled.div``
const ReviewDate = styled.span`
    color: #cfdbed;
    font-size: 14px;
    font-weight: 300;
`

const ProductReviews = () => {
    return (
        <Info>
            <InfoPart>
                <p>
                    <strong>Reviews (2)</strong>: <br />
                </p>
            </InfoPart>
            <ReviewsContainer>
                <Review>
                    <User>
                        <Username>Samanta J.</Username>
                        <Rate>
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                        </Rate>
                        <ReviewDate>6 days ago</ReviewDate>
                    </User>
                    <ReviewInfo>
                        <ReviewTitle>Good, perfect size</ReviewTitle>
                        <ReviewText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus cum dolores assumenda asperiores
                            facilis porro reprehenderit animi culpa atque
                            blanditiis commodi perspiciatis doloremque,
                            possimus, explicabo, autem fugit beatae quae
                            voluptas!
                        </ReviewText>
                        <ReviewUsefullnes>
                            <UsefullnessBtn>
                                <ThumbUpOutlined
                                    sx={{ fontSize: '16px', color: '#333' }}
                                />
                                <span>Helpfull</span>
                            </UsefullnessBtn>
                            <UsefullnessBtn>
                                <ThumbDownAltOutlined
                                    sx={{ fontSize: '16px', color: '#333' }}
                                />
                                <span>Unhelpfull</span>
                            </UsefullnessBtn>
                        </ReviewUsefullnes>
                    </ReviewInfo>
                </Review>
                <Review>
                    <User>
                        <Username>Samanta J.</Username>
                        <Rate>
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                            <StarOutline sx={{ fontSize: '20px' }} />
                        </Rate>
                        <ReviewDate>6 days ago</ReviewDate>
                    </User>
                    <ReviewInfo>
                        <ReviewTitle>Good, perfect size</ReviewTitle>
                        <ReviewText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus cum dolores assumenda asperiores
                            facilis porro reprehenderit animi culpa atque
                            blanditiis commodi perspiciatis doloremque,
                            possimus, explicabo, autem fugit beatae quae
                            voluptas!
                        </ReviewText>
                        <ReviewUsefullnes>
                            <UsefullnessBtn>
                                <ThumbUpOutlined
                                    sx={{ fontSize: '16px', color: '#333' }}
                                />
                                <span>Helpfull</span>
                            </UsefullnessBtn>
                            <UsefullnessBtn>
                                <ThumbDownAltOutlined
                                    sx={{ fontSize: '16px', color: '#333' }}
                                />
                                <span>Unhelpfull</span>
                            </UsefullnessBtn>
                        </ReviewUsefullnes>
                    </ReviewInfo>
                </Review>
            </ReviewsContainer>
        </Info>
    )
}

export default ProductReviews
