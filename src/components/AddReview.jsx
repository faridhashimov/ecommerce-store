import { Star, StarBorder } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

const AddReviewContainer = styled.div`
    /* padding: 5px 10px; */
    h1 {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        line-height: 20px;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        font-weight: 300;
        color: #777;
        line-height: 26px;
    }
`
const RatingContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
    span {
        font-size: 14px;
        font-weight: 300;
        color: #333;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`
const AddReviewForm = styled.form`
    width: 100%;
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
`
const ReviewTextarea = styled.textarea`
    width: 96%;
    resize: vertical;
    padding: 10px 20px;
    outline: none;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    &:focus {
        border: 1px solid #eea287;
    }
`
const ReviewInput = styled.input`
    width: 45%;
    padding: 10px 20px;
    outline: none;
    border-radius: 3px;

    margin-bottom: 10px;
    border: 1px solid #ccc;
    &:focus {
        border: 1px solid #eea287;
    }
`
const AddReviewButton = styled.button`
    padding: 10px 60px;
    background-color: #eea287;
    color: #fff;
    outline: none;
    cursor: pointer;
    margin-bottom: 30px;
    border: 1px solid #eea287;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #c9866e;
        transition: all 0.2s ease-in;
    }
`

const AddReview = ({id}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [inputs, setInputs] = useState({})

    const onSetInputs = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(inputs)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        try {
            const res = axios.post(
                `http://localhost:5000/api/products/${id}/:userId/reviews`
            )
        } catch (err) {
            throw new Error(err)
        }
    }

    return (
        <AddReviewContainer>
            <h1>Add a Review</h1>
            <p>
                Your email address will not be published. Required fields are
                marked *
            </p>
            <RatingContainer>
                <span>Your rating *</span>
                <div>
                    {[...Array(5)].map((star, i) => {
                        i += 1
                        return (
                            <SvgIcon
                                key={i}
                                sx={{
                                    color: '#eea287',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#eea287',
                                    },
                                }}
                                component={
                                    i <= (hover || rating) ? Star : StarBorder
                                }
                                onClick={() => setRating(i)}
                                onMouseEnter={() => setHover(i)}
                                onMouseLeave={() => setHover(rating)}
                            />
                        )
                    })}
                </div>
            </RatingContainer>
            <AddReviewForm onSubmit={onSubmit}>
                <ReviewInput
                    onChange={onSetInputs}
                    name="title"
                    type="text"
                    placeholder="Title *"
                />
                <ReviewTextarea
                    onChange={onSetInputs}
                    name="desc"
                    rows="6"
                    placeholder="Comment *"
                />
                <div>
                    <ReviewInput
                        onChange={onSetInputs}
                        name="name"
                        type="text"
                        placeholder="Name *"
                    />
                    <ReviewInput
                        onChange={onSetInputs}
                        name="email"
                        type="email"
                        placeholder="Email *"
                    />
                </div>
                <AddReviewButton>Submit</AddReviewButton>
            </AddReviewForm>
        </AddReviewContainer>
    )
}

export default AddReview