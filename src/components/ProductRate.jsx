import { Star, StarBorder, StarHalf } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import styled from 'styled-components'

const StarContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFC000;
`

const ProductRate = ({ fz, rate }) => {
    // const fz = '22'
    return (
        <>
            <StarContainer>
                {rate >= 1 ? (
                    <Star sx={{ fontSize: `${fz}px` }} />
                ) : rate >= 0.5 ? (
                    <StarHalf sx={{ fontSize: `${fz}px` }} />
                ) : (
                    <StarBorder sx={{ fontSize: `${fz}px` }} />
                )}
            </StarContainer>
            <StarContainer>
                {rate >= 2 ? (
                    <Star sx={{ fontSize: `${fz}px` }} />
                ) : rate >= 1.5 ? (
                    <StarHalf sx={{ fontSize: `${fz}px` }} />
                ) : (
                    <StarBorder sx={{ fontSize: `${fz}px` }} />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 3 ? (
                    <Star sx={{ fontSize: `${fz}px` }} />
                ) : rate >= 2.5 ? (
                    <StarHalf sx={{ fontSize: `${fz}px` }} />
                ) : (
                    <StarBorder sx={{ fontSize: `${fz}px` }} />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 4 ? (
                    <Star sx={{ fontSize: `${fz}px` }} />
                ) : rate >= 3.5 ? (
                    <StarHalf sx={{ fontSize: `${fz}px` }} />
                ) : (
                    <StarBorder sx={{ fontSize: `${fz}px` }} />
                )}
            </StarContainer>

            <StarContainer>
                {rate >= 5 ? (
                    <Star sx={{ fontSize: `${fz}px` }} />
                ) : rate >= 4.5 ? (
                    <StarHalf sx={{ fontSize: `${fz}px` }} />
                ) : (
                    <StarBorder sx={{ fontSize: `${fz}px` }} />
                )}
            </StarContainer>
        </>
    )
}

export default ProductRate
