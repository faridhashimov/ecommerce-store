import {
    Star,
    StarBorder,
    StarHalf,
} from '@mui/icons-material'
import styled from 'styled-components'

const StarContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eea287;
`

const ProductRate = ({rate}) => {
    return (
        <>
            <StarContainer>
                {rate >= 1 ? (
                    <Star />
                ) : rate >= 0.5 ? (
                    <StarHalf />
                ) : (
                    <StarBorder />
                )}
            </StarContainer>
            <StarContainer>
                {rate >= 2 ? (
                    <Star />
                ) : rate >= 1.5 ? (
                    <StarHalf />
                ) : (
                    <StarBorder />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 3 ? (
                    <Star />
                ) : rate >= 2.5 ? (
                    <StarHalf />
                ) : (
                    <StarBorder />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 4 ? (
                    <Star />
                ) : rate >= 3.5 ? (
                    <StarHalf />
                ) : (
                    <StarBorder />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 5 ? (
                    <Star />
                ) : rate >= 4.5 ? (
                    <StarHalf />
                ) : (
                    <StarBorder />
                )}
            </StarContainer>
        </>
    )
}

export default ProductRate
