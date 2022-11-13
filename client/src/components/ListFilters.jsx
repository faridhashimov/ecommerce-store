import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    Check,
    CheckBox,
    CheckBoxOutlineBlank,
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import styled from 'styled-components'

import { add } from '../redux/resetSlice'
import { mobile } from '../responsive'

const FilterContainer = styled.div`
    position: sticky;
    top: 0;
    flex: 1;
    align-self: flex-start;
    ${mobile({
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
    })}
    @media (max-width: 700px) {
        display: ${(props) => (props.d === 1 ? 'block' : 'none')};
    }
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
        border-radius: 4px;
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
    /* color: #1b1b1b; */
    transition: all 0.2s ease-in;
`
const FilterItem = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 3px 0px;
    transition: all 0.2s ease-in;
    text-decoration: none;
    color: #1b1b1b;
    &:hover ${FilterName} {
        color: #999;
        transition: all 0.2s ease-in;
    }
`
const StyledCheckbox = styled(SvgIcon)`
    margin-right: 5px;
    border: none;
    color: ${(props) => props.c};
    stroke-width: 0.2px;
`
const FilterColorContainer = styled.div`
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
`
const FilterColor = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 1px solid #999999;
    cursor: pointer;
    margin-right: 5px;
    background-color: #${(props) => props.c};
`

const ApplyBtn = styled.button`
    display: none;
    width: 100%;
    padding: 7px;
    background-color: #f27a1a;
    border: 1px solid #f27a1a;
    color: #fff;
    border-radius: 3px;
    ${mobile({ display: 'block' })}
`

const ListFilters = ({
    filters,
    cat,
    setCat,
    d,
    setOpenFilters,
    getFiltersUrl,
}) => {
    const [openFilter, setOpenFilter] = useState([
        'categories',
        'gender',
        'size',
        'brand',
    ])

    const dispatch = useDispatch()

    const openFilters = (index) => {
        if (openFilter.includes(index)) {
            setOpenFilter((openFilter) =>
                openFilter.filter((item) => item !== index)
            )
        } else {
            setOpenFilter((openFilter) => [...openFilter, index])
        }
    }

    const onToggleFilter = (categ, id) => {
        dispatch(add())

        if (cat && Object.entries(cat).flat().includes(id)) {
            setCat(
                Object.fromEntries(
                    Object.entries(cat).filter(([key, value]) => value !== id)
                )
            )
        } else {
            if (categ === 'gender') {
                setCat({ ...cat, gender: id })
            } else if (categ === 'size') {
                setCat({ ...cat, size: id })
            } else if (categ === 'brand') {
                setCat({ ...cat, brand: id })
            } else if (categ === 'category') {
                setCat({ ...cat, category: id })
            } else {
                setCat({ ...cat, color: id })
            }
        }
    }

    return (
        <FilterContainer d={d}>
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
                                onClick={() => onToggleFilter('category', item)}
                                to={getFiltersUrl({ category: item })}
                            >
                                <FilterName
                                    style={{
                                        color: !cat
                                            ? '#1b1b1b'
                                            : Object.entries(cat)
                                                  .flat()
                                                  .includes(item)
                                            ? '#f27a1a'
                                            : '#1b1b1b',
                                    }}
                                >
                                    {item}
                                </FilterName>
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
                            ? '120px'
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
                                onClick={() => onToggleFilter('gender', item)}
                                to={getFiltersUrl({ gender: item })}
                            >
                                {!cat ? (
                                    <StyledCheckbox
                                        c="#999"
                                        component={CheckBoxOutlineBlank}
                                    />
                                ) : Object.entries(cat)
                                      .flat()
                                      .includes(item) ? (
                                    <StyledCheckbox
                                        c="#F27A1A"
                                        component={CheckBox}
                                    />
                                ) : (
                                    <StyledCheckbox
                                        c="#999"
                                        component={CheckBoxOutlineBlank}
                                    />
                                )}
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
                                onClick={() => onToggleFilter('brand', item)}
                                to={getFiltersUrl({ brand: item })}
                            >
                                {!cat ? (
                                    <StyledCheckbox
                                        c="#999"
                                        component={CheckBoxOutlineBlank}
                                    />
                                ) : Object.entries(cat)
                                      .flat()
                                      .includes(item) ? (
                                    <StyledCheckbox
                                        c="#F27A1A"
                                        component={CheckBox}
                                    />
                                ) : (
                                    <StyledCheckbox
                                        c="#999"
                                        component={CheckBoxOutlineBlank}
                                    />
                                )}
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
                                onClick={() => onToggleFilter('size', item)}
                                to={getFiltersUrl({ size: item })}
                            >
                                {!cat ? (
                                    <StyledCheckbox
                                        c="#999"
                                        component={CheckBoxOutlineBlank}
                                    />
                                ) : Object.entries(cat)
                                      .flat()
                                      .includes(item) ? (
                                    <StyledCheckbox
                                        c="#F27A1A"
                                        component={CheckBox}
                                    />
                                ) : (
                                    <StyledCheckbox
                                        c="#999"
                                        component={CheckBoxOutlineBlank}
                                    />
                                )}
                                <FilterName>{item}</FilterName>
                            </FilterItem>
                        ))}
                    </Filters>
                </Categories>
            </CategoriesContainer>
            <CategoriesContainer>
                <FilterHeader onClick={() => openFilters('color')}>
                    <Title>Color</Title>
                    {openFilter.includes('color') ? (
                        <ExpandLess sx={{ color: '#F27A1A' }} />
                    ) : (
                        <ExpandMore />
                    )}
                </FilterHeader>
                <Categories
                    height={
                        openFilter.includes('color') &&
                        filters.sizeFilter.length >= 10
                            ? '200px'
                            : openFilter.includes('color') &&
                              filters.sizeFilter.length < 10
                            ? 'fit-content'
                            : '0px'
                    }
                >
                    <Filters>
                        <FilterColorContainer>
                            {filters.colorFilter.map((item) => (
                                <FilterColor
                                    c={item}
                                    key={item}
                                    onClick={() =>
                                        onToggleFilter('color', item)
                                    }
                                    to={getFiltersUrl({ color: item })}
                                >
                                    {cat &&
                                    Object.entries(cat)
                                        .flat()
                                        .includes(item) ? (
                                        <StyledCheckbox
                                            style={{
                                                fontSize: '15px',
                                                stroke: '#fff',
                                                marginRight: '0px',
                                            }}
                                            c="#f2bc1a"
                                            component={Check}
                                        />
                                    ) : null}
                                </FilterColor>
                            ))}
                        </FilterColorContainer>
                    </Filters>
                </Categories>
            </CategoriesContainer>
            <ApplyBtn onClick={() => setOpenFilters(false)}>
                Show Results
            </ApplyBtn>
        </FilterContainer>
    )
}

export default ListFilters
