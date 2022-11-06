import { useCallback, useState } from 'react'
import styled from 'styled-components'

const Images = styled.div`
    /* flex: 2; */
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`
const Image = styled.img`
    height: 118px;
    width: 86px;
    margin-bottom: 7px;
    object-fit: cover;
    cursor: pointer;
`

const ImagesComponent = ({ product }) => {
    const [image, setImage] = useState(product.img[0])
    const onSetImage = useCallback(
        (e, item) => {
            setImage(item)
        },
        [image]
    )
    return (
        <Images>
            {product?.img?.map((item, i) => (
                <Image onClick={() => onSetImage(item)} key={i} src={item} />
            ))}
        </Images>
    )
}

export default ImagesComponent
