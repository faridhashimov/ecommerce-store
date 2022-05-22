import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Portal from '../Portal'
import { AddReviewModal } from '../components'

const ProductImageContainer = styled(Link)`
    height: 110px;
    width: 70px;
    border: 1px solid #e2e2e2;
    padding: 2px 4px;
    margin-right: 15px;
    border-radius: 5px;
    transition: all 0.4s ease-in;
`
const ProductContainer = styled.div`
    border: 1px solid #e2e2e2;
    padding: 15px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover ${ProductImageContainer} {
        transform: scale(1.05);
        transition: all 0.2s ease-in;
    }
`
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const ProductInfoContainer = styled.div``
const BrandNTitle = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #333;
    span {
        font-weight: 600;
    }
`
const ProductInfo = styled.div`
    display: flex;
    margin: 5px 0px;
`
const Size = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #999;
    margin-right: 10px;
    span {
        color: #222;
    }
`
const Qt = styled(Size)``
const ColorContainer = styled(Size)`
    display: flex;
    align-items: center;
`
const Color = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #${(props) => props.c};
    margin-left: 5px;
`
const Price = styled.div`
    color: #F27A1A;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 15px;
`
const AddReviewBtn = styled.button`
    background-color: transparent;
    border: 1px solid #F27A1A;
    color: #F27A1A;
    padding: 4px 25px;
    transition: all 0.2s ease-in;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background-color: #f08936;
        color: #fff;
        transition: all 0.2s ease-in;
    }
`
const AddReviewContainer = styled.div`
    z-index: 10000;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.35);
`

const SingleOrderItem = ({
    _id,
    brand,
    title,
    img,
    productSize,
    productColor,
    quantity,
}) => {
    const [open, setOpen] = useState(false)

    console.log(productSize ? 'true' : 'false')
    return (
        <>
            <ProductContainer>
                <ProductImageContainer to={'/product/' + _id}>
                    <ProductImage src={img[0]} alt="" />
                </ProductImageContainer>
                <ProductInfoContainer>
                    <BrandNTitle>
                        <span>{brand}</span> {title}
                    </BrandNTitle>
                    <ProductInfo>
                        {productSize && (
                            <Size>
                                Size: <span>{productSize}</span>
                            </Size>
                        )}
                        <ColorContainer>
                            Color: <Color c={productColor}></Color>
                        </ColorContainer>
                        <Qt>
                            Qt: <span>{quantity}</span>
                        </Qt>
                    </ProductInfo>
                    <Price>$ 59.99</Price>
                    <AddReviewBtn onClick={() => setOpen(true)}>
                        Add Review
                    </AddReviewBtn>
                </ProductInfoContainer>
            </ProductContainer>
            {open && (
                <Portal>
                    <AddReviewModal
                        item={{_id, brand, title, img }}
                        setOpen={setOpen}
                    />
                </Portal>
            )}
        </>
    )
}

export default SingleOrderItem
