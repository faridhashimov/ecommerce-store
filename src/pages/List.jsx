import { ExpandLess, ExpandMore } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Footer, ListProduct, Navbar } from '../components'

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
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 15px 20px;
`
const ListHeadeTitle = styled.h1`
    font-size: 17px;
    font-weight: 500;
`
const FilterBy = styled.select`
    padding: 2px 5px;
    width: 180px;
    border: 1px solid #ccc;
    color: #666;
    &:focus {
        outline: none;
    }
`
const FilterByOption = styled.option``
const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-left: 20px;
`

const List = ({ cat }) => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState(cat)
    const [openFilter, setOpenFilters] = useState([
        'categories',
        'gender',
        'size',
        'brand',
    ])

    // console.log(location);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${category}`
                        : `http://localhost:5000/api/products`
                )
                setProducts(res.data)
                console.log(res)
            } catch (error) {
                throw new Error(error)
                // console.log(error)
            }
        }
        getProducts()
    }, [cat, category])

    const openFilters = (index) => {
        if (openFilter.includes(index)) {
            setOpenFilters((openFilter) =>
                openFilter.filter((item) => item !== index)
            )
            // openFilter.filter((item) => item !== index)
        } else {
            setOpenFilters((openFilter) => [...openFilter, index])
        }
        console.log(openFilter)
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
                                {openFilter.includes('categories') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: openFilter.includes('categories')
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
                                {openFilter.includes('gender') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: openFilter.includes('gender')
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
                                {openFilter.includes('brand') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: openFilter.includes('brand')
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
                                {openFilter.includes('size') ? (
                                    <ExpandLess sx={{ color: '#F27A1A' }} />
                                ) : (
                                    <ExpandMore />
                                )}
                            </FilterHeader>
                            <Filters
                                style={{
                                    height: openFilter.includes('size')
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
                        <ListHeader>
                            <ListHeadeTitle>
                                1077 results are listed for the search "Mango"
                            </ListHeadeTitle>
                            <FilterBy>
                                <FilterByOption>Sort By:</FilterByOption>
                                <FilterByOption value="new">
                                    Newest Arrivals
                                </FilterByOption>
                                <FilterByOption value="low">
                                    Price: Low
                                </FilterByOption>
                                <FilterByOption value="high">
                                    Price: High
                                </FilterByOption>
                            </FilterBy>
                        </ListHeader>

                        <Products>
                            {products.map((item) => (
                                <ListProduct key={item._id} {...item} />
                            ))}
                        </Products>
                    </ProductsContainer>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default List
