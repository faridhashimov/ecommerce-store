import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
    ArrowRightAltOutlined,
} from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import sale from '../resources/img-1.webp'
import cNj from '../resources/img-2.webp'
import sv from '../resources/img-3.webp'
import { mobile } from '../responsive'

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    /* background-color: #f6f6f6; */
    overflow: hidden;
    ${mobile({height: '250px'})}
`

const ChevronContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.side === 'left' && '20px'};
    right: ${(props) => props.side === 'right' && '20px'};
    margin: auto;
    color: #d1cbcb;
    padding: 12px;
    transition: all 0.2s ease;
    cursor: pointer;
    z-index: 2;
    opacity: 0.5;
    &:hover {
        background-color: #eea287;
        color: #f9f9f9;
    }
    /* ${mobile({display: 'none'})} */

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const MainSlider = styled.div`
    width: 100vw;
    height: 100%;
    background-color: ${(props) => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) =>
        props.flex === 'reverse' ? 'row-reverse' : 'row'};
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    flex: 1;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    ${mobile({paddingTop: '20px'})}
`

const Image = styled.img`
    height: 100%;

    width: 100%;
    object-fit: contain;
    position: relative;
    &::before {
        content: '';
        top: 0;
        right: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 49%,
            rgba(255, 255, 255, 1) 100%
        );
    }
  
`

const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #232323;
    text-transform: uppercase;
    padding: 12px 32px;
    letter-spacing: 2px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: transparent;
    &:hover {
        background-color: #232323;
        color: #fff;
    }
    ${mobile({ padding: '7px 17px',marginTop: '15px'})}
`

const InfoTitle = styled.div``
const MainTitle = styled.h1`
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.size};
    text-transform: uppercase;
    font-weight: 700;
    line-height: 6rem;
    letter-spacing: -5px;
    color: #232323;
    margin: 20px 0px;
    ${mobile({ fontSize: '40px', margin: '10px 0px', lineHeight: '2.5rem', fontWeight: '500' })}
`

const Sale = styled.span`
    font-size: 180px;
    font-weight: 700;
    margin: 20px 0px;
    line-height: 7rem;
    color: #eea287;
    ${mobile({ fontSize: '40px', margin: '0', lineHeight: '3.5rem',fontWeight: '500' })}
`

const SecondaryTitle = styled.h4`
    text-transform: uppercase;
    font-size: 18px;
    color: #666666;
    font-weight: 400;
    ${mobile({ fontSize: '15px'})}
`

const Slider = () => {
    const [slideIndex, SetSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            SetSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            SetSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <ChevronContainer side="left" onClick={() => handleClick('left')}>
                <ArrowBackIosOutlined />
            </ChevronContainer>
            <Wrapper slideIndex={slideIndex}>
                <MainSlider bg="#F8F8F8">
                    <InfoContainer>
                        <Info>
                            <InfoTitle>
                                <SecondaryTitle>
                                    Limited Time Only *
                                </SecondaryTitle>
                                <MainTitle size="120px">
                                    Spring <Sale>Sale</Sale>
                                </MainTitle>
                                <SecondaryTitle>Up To 20% Off</SecondaryTitle>
                            </InfoTitle>
                            <InfoButton>
                                Shop Now
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </InfoButton>
                        </Info>
                        <ImageContainer>
                            <Image src={sale} />
                        </ImageContainer>
                    </InfoContainer>
                </MainSlider>
                <MainSlider bg="#F8F8F8">
                    <InfoContainer flex="reverse">
                        <Info>
                            <InfoTitle>
                                <SecondaryTitle>
                                    Spring clean your wardrobe
                                </SecondaryTitle>
                                <MainTitle size="100px">
                                    COATS &amp; JACKETS
                                </MainTitle>
                                <SecondaryTitle>50% Off</SecondaryTitle>
                            </InfoTitle>
                            <InfoButton>
                                Shop Now
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </InfoButton>
                        </Info>
                        <ImageContainer>
                            <Image src={cNj} />
                        </ImageContainer>
                    </InfoContainer>
                </MainSlider>
                <MainSlider bg="#E9E8EB">
                    <InfoContainer flex="reverse">
                        <Info>
                            <InfoTitle>
                                <SecondaryTitle>Shop now</SecondaryTitle>
                                <MainTitle size="100px">switch verse</MainTitle>
                                <SecondaryTitle>shop mens</SecondaryTitle>
                            </InfoTitle>
                            <InfoButton>
                                Shop Now
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </InfoButton>
                        </Info>
                        <ImageContainer>
                            <Image src={sv} />
                        </ImageContainer>
                    </InfoContainer>
                </MainSlider>
            </Wrapper>
            <ChevronContainer side="right" onClick={() => handleClick('right')}>
                <ArrowForwardIosOutlined />
            </ChevronContainer>
        </Container>
    )
}

export default Slider
