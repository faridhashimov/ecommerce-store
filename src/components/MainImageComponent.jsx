import { useCallback, useState } from 'react'
import styled from 'styled-components'

const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const MainImageWrapper = styled.figure`
    width: 100%;
    height: 95%;
    background-repeat: no-repeat;
    cursor: move;
    &:hover ${MainImage} {
        opacity: 0;
    }
`

const MainImageComponent = ({ image }) => {
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')

    const handleMouseMove = useCallback(
        (e) => {
            const { left, top, width, height } =
                e.target.getBoundingClientRect()
            const x = ((e.pageX - left) / width) * 50
            const y = ((e.pageY - top) / height) * 50
            setBackgroundPosition(`${x}% ${y}%`)
        },
        [backgroundPosition]
    )
    return (
        <MainImageWrapper
            onMouseMove={handleMouseMove}
            style={{
                backgroundPosition: `${backgroundPosition}`,
                backgroundImage: `url(${image})`,
            }}
        >
            <MainImage src={image} />
        </MainImageWrapper>
    )
}

export default MainImageComponent
