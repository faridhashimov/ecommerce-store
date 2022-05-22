import { ExpandLess, ExpandMore } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Footer, Navbar } from '../components'

const Container = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    width: 93vw;
    margin: 0 auto;
    padding: 30px 0px;
    display: flex;
`
const FilterContainer = styled.div`
    flex: 1;
`
const ProductsContainer = styled.div`
    flex: 5;
`
const CategoriesContainer = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid #ececec;
`
const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px 10px;
    cursor: pointer;
`
const Title = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #333;
`
const Filters = styled.ul`
    list-style: none;
    overflow: hidden;
`
const FilterName = styled.span`
    font-size: 13px;
    color: #1b1b1b;
    transition: all 0.2s ease-in;
`
const FilterItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 3px 0px;
    &:hover ${FilterName} {
        color: #999;
        transition: all 0.2s ease-in;
    }
`
const Check = styled.input`
    margin-right: 7px;
`

const Gender = styled.div``
const Brand = styled.div``
const Color = styled.div``
const Size = styled.div``
const ProductRating = styled.div``
const ListHeader = styled.div``
const FilterBy = styled.div``
const Products = styled.div``

const List = () => {
    const [filters, setFilters] = useState([
        'categories',
        'gender',
        'size',
        'brand',
    ])

    // console.log(filters)

    const openFilters = (index) => {
        if (filters.includes(index)) {
            setFilters((filters) => filters.filter((item) => item !== index))
            // filters.filter((item) => item !== index)
        } else {
            setFilters((filters) => [...filters, index])
        }
        console.log(filters)
    }

    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <FilterContainer>
                        <CategoriesContainer>
                            <FilterHeader
                                onClick={() => openFilters('categories')}
                            >
                                <Title>Catergories</Title>
                                {filters.includes('categories') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: filters.includes('categories')
                                        ? 'fit-content'
                                        : '0px',
                                }}
                            >
                                <FilterItem>
                                    <FilterName>Men</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Women</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Shoes</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Accessories</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Bags</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Shirts</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Shorts</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>T-shirts</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Girls</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <FilterName>Boys</FilterName>
                                </FilterItem>
                            </Filters>
                        </CategoriesContainer>
                        <CategoriesContainer>
                            <FilterHeader onClick={() => openFilters('gender')}>
                                <Title>Gender</Title>
                                {filters.includes('gender') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: filters.includes('gender')
                                        ? 'fit-content'
                                        : '0px',
                                }}
                            >
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>Male</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>Female</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>Kids</FilterName>
                                </FilterItem>
                            </Filters>
                        </CategoriesContainer>
                        <CategoriesContainer>
                            <FilterHeader onClick={() => openFilters('brand')}>
                                <Title>Brand</Title>
                                {filters.includes('brand') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: filters.includes('brand')
                                        ? 'fit-content'
                                        : '0px',
                                }}
                            >
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>Mavi</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>Koton</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>H&M</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>Lacoste</FilterName>
                                </FilterItem>
                            </Filters>
                        </CategoriesContainer>
                        <CategoriesContainer>
                            <FilterHeader onClick={() => openFilters('size')}>
                                <Title>Size</Title>
                                {filters.includes('size') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: filters.includes('size')
                                        ? 'fit-content'
                                        : '0px',
                                }}
                            >
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>XS</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>S</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>M</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>L</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>XL</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>2XL</FilterName>
                                </FilterItem>
                                <FilterItem>
                                    <Check type="checkbox" />{' '}
                                    <FilterName>3XL</FilterName>
                                </FilterItem>
                            </Filters>
                        </CategoriesContainer>
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
