import React from 'react';
import styled from 'styled-components';
import { brandItems } from '../data';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0px 10px; */
    margin-top: 20px;
`;

const BranItemContainer= styled.div`
    flex: 1;
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
                <BranItemContainer key={item.id}>
                    <BrandItem src={item.img}  />
                </BranItemContainer>
            ))}
        </Container>
    );
};

export default Brands;
