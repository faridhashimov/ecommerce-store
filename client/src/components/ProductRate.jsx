import { Star, StarBorder, StarHalf } from '@mui/icons-material'
import styled from 'styled-components'

const StarContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffc000;
`

const ProductRate = ({ rate }) => {
    return (
        <>
            <StarContainer>
                {rate >= 1 ? (
                    <Star sx={{ fontSize: '17px' }} />
                ) : rate >= 0.5 ? (
                    <StarHalf sx={{ fontSize: '17px' }} />
                ) : (
                    <StarBorder sx={{ fontSize: '17px' }} />
                )}
            </StarContainer>
            <StarContainer>
                {rate >= 2 ? (
                    <Star sx={{ fontSize: '17px' }} />
                ) : rate >= 1.5 ? (
                    <StarHalf sx={{ fontSize: '17px' }} />
                ) : (
                    <StarBorder sx={{ fontSize: '17px' }} />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 3 ? (
                    <Star sx={{ fontSize: '17px' }} />
                ) : rate >= 2.5 ? (
                    <StarHalf sx={{ fontSize: '17px' }} />
                ) : (
                    <StarBorder sx={{ fontSize: '17px' }} />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 4 ? (
                    <Star sx={{ fontSize: '17px' }} />
                ) : rate >= 3.5 ? (
                    <StarHalf sx={{ fontSize: '17px' }} />
                ) : (
                    <StarBorder sx={{ fontSize: '17px' }} />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 5 ? (
                    <Star sx={{ fontSize: '17px' }} />
                ) : rate >= 4.5 ? (
                    <StarHalf sx={{ fontSize: '17px' }} />
                ) : (
                    <StarBorder sx={{ fontSize: '17px' }} />
                )}
            </StarContainer>
        </>
    )
}

export default ProductRate
