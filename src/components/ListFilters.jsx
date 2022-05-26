import { ExpandLess, ExpandMore } from '@mui/icons-material'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
    flex: 1;
    align-self: flex-start;
`
const CategoriesContainer = styled.div`
    padding-bottom: 15px;

    border-bottom: 1px solid #dfdfdf;
`
const Categories = styled.div`
    height: ${(props) => props.height};
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 8px;
        background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888888;
        border-radius: 4px;
        min-height: 10px;
    }
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
const ListFilters = ({ filters, cat, setCat }) => {
    const [openFilter, setOpenFilters] = useState([
        'categories',
        'gender',
        'size',
        'brand',
    ])

    const openFilters = (index) => {
        if (openFilter.includes(index)) {
            setOpenFilters((openFilter) =>
                openFilter.filter((item) => item !== index)
            )
        } else {
            setOpenFilters((openFilter) => [...openFilter, index])
        }
    }

    console.log('render')

    return (
        <FilterContainer>
            <CategoriesContainer>
                <FilterHeader onClick={() => openFilters('categories')}>
                    <Title>Catergories</Title>
                    {openFilter.includes('categories') ? (
                        <ExpandLess sx={{ color: '#F27A1A' }} />
                    ) : (
                        <ExpandMore />
                    )}
                </FilterHeader>
                <Categories
                    height={
                        openFilter.includes('categories') &&
                        filters.categoryFilter.length >= 10
                            ? '200px'
                            : openFilter.includes('categories') &&
                              filters.categoryFilter.length < 10
                            ? 'fit-content'
                            : '0px'
                    }
                >
                    <Filters>
                        {filters.categoryFilter.map((item) => (
                            <FilterItem
                                key={item}
                                // onClick={() => setCategory(item)}
                                onClick={() =>
                                    setCat({
                                        ...cat,
                                        category: item,
                                    })
                                }
                            >
                                <FilterName>{item}</FilterName>
                            </FilterItem>
                        ))}
                    </Filters>
                </Categories>
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
                <Categories
                    height={
                        openFilter.includes('gender') &&
                        filters.genderFilter.length >= 4
                            ? '105px'
                            : openFilter.includes('gender') &&
                              filters.genderFilter.length < 4
                            ? 'fit-content'
                            : '0px'
                    }
                >
                    <Filters>
                        {filters.genderFilter.map((item) => (
                            <FilterItem
                                key={item}
                                onClick={() =>
                                    setCat({
                                        ...cat,
                                        gender: item,
                                    })
                                }
                            >
                                <Check type="checkbox" />{' '}
                                <FilterName>{item}</FilterName>
                            </FilterItem>
                        ))}
                    </Filters>
                </Categories>
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
                <Categories
                    height={
                        openFilter.includes('brand') &&
                        filters.brandFilter.length >= 10
                            ? '200px'
                            : openFilter.includes('brand') &&
                              filters.brandFilter.length < 10
                            ? 'fit-content'
                            : '0px'
                    }
                >
                    <Filters>
                        {filters.brandFilter.map((item) => (
                            <FilterItem
                                key={item}
                                onClick={() =>
                                    setCat({
                                        ...cat,
                                        brand: item,
                                    })
                                }
                            >
                                <Check type="checkbox" />{' '}
                                <FilterName>{item}</FilterName>
                            </FilterItem>
                        ))}
                    </Filters>
                </Categories>
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
                <Categories
                    height={
                        openFilter.includes('size') &&
                        filters.sizeFilter.length >= 10
                            ? '200px'
                            : openFilter.includes('size') &&
                              filters.sizeFilter.length < 10
                            ? 'fit-content'
                            : '0px'
                    }
                >
                    <Filters>
                        {filters.sizeFilter.map((item) => (
                            <FilterItem
                                key={item}
                                onClick={() =>
                                    setCat({
                                        ...cat,
                                        size: item,
                                    })
                                }
                            >
                                <Check type="checkbox" />{' '}
                                <FilterName>{item}</FilterName>
                            </FilterItem>
                        ))}
                    </Filters>
                </Categories>
            </CategoriesContainer>
        </FilterContainer>
    )
}

export default ListFilters
