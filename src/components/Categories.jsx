import React from 'react';
import styled from 'styled-components';
import Brands from './Brands';
import { catItems } from '../data';
import { ArrowRightAltOutlined } from '@mui/icons-material';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div``;
const AllCategories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const CategoryItem = styled.div`
    flex: 1;
    margin: 0px 10px;
    position: relative;
    height: 480px;
    cursor: pointer;
    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        display: none;
        transition: all 2s ease;
    }
    &:hover::after {
        display: block;
    }
`;
const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const CategoryInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: 40px;
    top: 35%;
    text-transform: uppercase;
    width: 150px;
    z-index: 2;
`;
const CategoryTitle = styled.span`
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 300;
    color: #777777;
`;
const CategoryName = styled.h1`
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: #333333;
`;
const CategoryDiscount = styled.h2`
    font-size: 22px;
    font-weight: 300;
    letter-spacing: -1px;
    color: #333333;
`;

const CategoryButton = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #eea287;
    border: 2px solid #eea287;
    min-width: 120px;
    text-transform: uppercase;
    padding: 6px 10px;
    /* letter-spacing: 1px; */
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: transparent;
    &:hover {
        background-color: #eea287;
        color: #fff;
    }
`;

const Categories = () => {
    return (
        <Container>
            <Wrapper>
                <AllCategories>
                    {catItems.map((item) => (
                        <CategoryItem>
                            <CategoryImage src={item.img} />
                            <CategoryInfo>
                                <CategoryTitle>{item.title}</CategoryTitle>
                                <CategoryName>{item.cat}</CategoryName>
                                <CategoryDiscount>{item.disc}</CategoryDiscount>
                                <CategoryButton>
                                    Shop Now
                                    <ArrowRightAltOutlined
                                        style={{
                                            marginLeft: 12,
                                            fontSize: 15,
                                            fontWeight: 300,
                                        }}
                                    />
                                </CategoryButton>
                            </CategoryInfo>
                        </CategoryItem>
                    ))}
                </AllCategories>
                <Brands />
            </Wrapper>
        </Container>
    );
};

export default Categories;
