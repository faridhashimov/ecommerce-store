import React from 'react'
import styled from 'styled-components'
import { brandItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0px 10px; */
    margin-top: 20px;
    ${mobile({ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' })}
`

const BranItemContainer = styled.div`
    flex: 1;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ height: '50px'})}

`
const BrandItem = styled.img`
`

const Brands = () => {
    return (
        <Container>
            {brandItems.map((item) => (
                <BranItemContainer key={item.id}>
                    <BrandItem src={item.img} />
                </BranItemContainer>
            ))}
        </Container>
    )
}

export default Brands
