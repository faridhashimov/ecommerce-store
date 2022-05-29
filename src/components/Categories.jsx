import React from 'react'
import styled from 'styled-components'
const CategoriesContainer = styled.div`
    width: 100%;
    margin-top: 5px;
    border-bottom: 1px solid #e8e8e8;
`
const CategoriesList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`
const CategoryItem = styled.li`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    padding: 5px 20px;
    text-transform: uppercase;
`
// const CategoriesList = styled.ul``
// const CategoriesList = styled.ul``

const Categories = () => {
    return (
        <CategoriesContainer>
            <CategoriesList>
                <CategoryItem>Women</CategoryItem>
                <CategoryItem>Men</CategoryItem>
                <CategoryItem>Kids</CategoryItem>
                <CategoryItem>Accessories</CategoryItem>
                <CategoryItem>Shoes</CategoryItem>
            </CategoriesList>
        </CategoriesContainer>
    )
}

export default Categories
