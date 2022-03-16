import React from 'react';
import styled from 'styled-components';
import { brandItems } from '../data';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BranItemContainer= styled.div`
    width: 165px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const BrandItem = styled.img`
`;

const Brands = () => {
    return (
        <Container>
            {brandItems.map((item) => (
                <BranItemContainer>
                    <BrandItem src={item.img} key={item.id} />
                </BranItemContainer>
            ))}
        </Container>
    );
};

export default Brands;
