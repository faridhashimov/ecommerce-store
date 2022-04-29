import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import Brands from './Brands';
import { catItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 93vw;
`;
const AllCategories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    ${mobile({flexDirection: 'column'})}
`;

const Categories = () => {
    return (
        <Container>
            <Wrapper>
                <AllCategories>
                    {catItems.map((item) => (
                        <CategoryItem key={item.id} {...item} />
                    ))}
                </AllCategories>
                <Brands />
            </Wrapper>
        </Container>
    );
};

export default Categories;
