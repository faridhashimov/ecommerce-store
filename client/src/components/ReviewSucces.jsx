import { CheckCircleOutline, Close, ThumbUp } from '@mui/icons-material'
import styled from 'styled-components'

const ModalContainer = styled.div`
    position: relative;
    min-height: 75%;
    width: 33.3%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 20px;
    border-radius: 3px;
`
const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 10px;
`
const PointInfoContainer = styled.div``
const PointInfoBody = styled.div`
    background-color: #ffeada;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
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
            color: #f27a1a;
        }
    }
`
const ReviewInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ReviewInfoTitle = styled.h1`
    font-size: 28px;
    font-weight: 500;
    color: green;
    margin: 15px 0px;
`
const ReviewInfoDesc = styled.p`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

const CloseBtn = styled.button`
    width: 100%;
    padding: 7px 0px;
    background-color: #f27a1a;
    border: 1px solid #f27a1a;
    margin-top: 15px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #f08936;
        transition: all 0.2s ease-in;
    }
`

const ReviewSucces = ({ setOpen, setSucces }) => {
    const handleClick = () => {
        setOpen(false)
        setSucces(false)
    }
    return (
        <ModalContainer>
            <ModalHeader>
                <Close
                    sx={{
                        color: '#1b1b1b',
                        fontSize: '18px',
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                />
            </ModalHeader>
            <ReviewInfoContainer>
                <CheckCircleOutline
                    sx={{
                        fontSize: '80px',
                        fontWeight: 'thin',
                        color: 'green',
                    }}
                />
                <ReviewInfoTitle>Thank you for your review</ReviewInfoTitle>
                <ReviewInfoDesc>
                    Your comment will be published as soon as possible after
                    being checked.
                </ReviewInfoDesc>
            </ReviewInfoContainer>
            <PointInfoContainer>
                <PointInfoBody>
                    <IconContainer>
                        <ThumbUp
                            sx={{
                                color: '#F27A1A',
                                fontSize: '25px',
                            }}
                        />
                    </IconContainer>
                    <PointInfo>
                        <p>
                            When your review will approve, you will see{' '}
                            <span>25 </span>
                            Points in your account. If your review gets 3 likes,
                            you will get <span>+50</span> Points!{' '}
                        </p>
                    </PointInfo>
                </PointInfoBody>
            </PointInfoContainer>
            <CloseBtn onClick={handleClick}>Ok</CloseBtn>
        </ModalContainer>
    )
}

export default ReviewSucces
