import React from 'react'
import styled from 'styled-components'
import { Footer, Navbar } from '../components'
const Container = styled.div``
const Wrapper = styled.div``
const FilterContainer = styled.div``
const ProductsContainer = styled.div``
const Categories = styled.div``
const Gender = styled.div``
const Brand = styled.div``
const Color = styled.div``
const Size = styled.div``
const ProductRating = styled.div``
const ListHeader = styled.div``
const FilterBy = styled.div``
const Products = styled.div``

const List = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <FilterContainer>
                        <Categories></Categories>
                        <Gender></Gender>
                        <Brand></Brand>
                        <Size></Size>
                        <Color></Color>
                        <ProductRating></ProductRating>
                    </FilterContainer>
                    <ProductsContainer>
                        <ListHeader></ListHeader>
                        <FilterBy></FilterBy>
                        <Products></Products>
                    </ProductsContainer>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default List
