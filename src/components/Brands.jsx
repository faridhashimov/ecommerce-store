import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { brandItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0px 10px; */
    margin-top: 40px;
    ${mobile({ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' })}
`
const BrandItemImageContainer = styled.div`
    height: 68px;
    width: 68px;
    border-radius: 50%;
    border: 1px solid #e2e2e2;
    overflow: hidden;
    transition: all 0.2s ease-in;
    ${mobile({ height: '50px' })}
`
const BrandItemImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`
const BrandItemName = styled.span`
    width: 74px;
    height: 42px;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #333;
    font-weight: 500;
    line-height: 16px;
    transition: all 0.2s ease-in;
`
const BrandItemContainer = styled.div`
    width: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in;
    cursor: pointer;
    &:hover ${BrandItemName} {
        color: #f27a1a;
        transition: all 0.2s ease-in;
    }
    &:hover ${BrandItemImageContainer} {
        border: 1px solid #f27a1a;
        transition: all 0.2s ease-in;
    }
`

const Brands = () => {
    let navigate = useNavigate()
    const onOpenProducts = (item) => {
        navigate('/list', { state: { brand: item.name } })
    }

    return (
        <Container>
            {brandItems.map((item) => (
                <BrandItemContainer
                    onClick={() => onOpenProducts(item)}
                    key={item.id}
                >
                    <BrandItemImageContainer>
                        <BrandItemImage src={item.img} />
                    </BrandItemImageContainer>
                    <BrandItemName>{item.name}</BrandItemName>
                </BrandItemContainer>
            ))}
        </Container>
    )
}

export default Brands
