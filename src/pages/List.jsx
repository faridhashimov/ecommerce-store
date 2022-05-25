import { ExpandLess, ExpandMore } from '@mui/icons-material'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, ListProduct, Navbar, Spinner } from '../components'
import { useAxios } from '../hooks/useAxios'

const Container = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    min-height: 100vh;
    width: 93vw;
    margin: 0 auto;
    padding: 30px 0px;
    display: flex;
    align-items: center;
`
const FilterContainer = styled.div`
    flex: 1;
    align-self: flex-start;
`
const ProductsContainer = styled.div`
    flex: 5;
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

const List = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState(location?.state?.item)
    const [openFilter, setOpenFilters] = useState([
        'categories',
        'gender',
        'size',
        'brand',
    ])

    const [categoryFilter, setCategoryFilter] = useState([])
    const [brandFilter, setBrandFilter] = useState([])
    const [sizeFilter, setSizeFilter] = useState([])
    const [genderFilter, setGenderFilter] = useState([])

    const [cat, setCat] = useState(null)

    console.log(location?.state?.item)

    const qs =
        cat &&
        Object.keys(cat)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(cat[key])}`
            )
            .join('&')

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const res = await axios.get(
                    location?.state?.item
                        ? `http://localhost:5000/api/products?category=${location?.state?.item}`
                        : cat
                        ? `http://localhost:5000/api/products?${qs}`
                        : `http://localhost:5000/api/products`
                )
                setProducts(res.data)
                setLoading(false)
                // console.log(res.data)
                const allCats = [
                    ...new Set(res.data.map((item) => item.category).flat()),
                ]
                const allBrands = [
                    ...new Set(res.data.map((item) => item.brand)),
                ]
                const allGenders = [
                    ...new Set(res.data.map((item) => item.gender)),
                ]
                const allSizes = [
                    ...new Set(res.data.map((item) => item.size).flat()),
                ]

                setCategoryFilter(allCats)
                setBrandFilter(allBrands)
                setSizeFilter(allSizes)
                setGenderFilter(allGenders)
                // console.log(allSizes)

                // setCatContainer(res.data.map())
            } catch (error) {
                setError(error.message)
                throw new Error(error)
                // console.log(error)
            }
        }
        getProducts()
    }, [location?.state, category, cat, qs])

    const openFilters = useCallback(
        (index) => {
            if (openFilter.includes(index)) {
                setOpenFilters((openFilter) =>
                    openFilter.filter((item) => item !== index)
                )
            } else {
                setOpenFilters((openFilter) => [...openFilter, index])
            }
            // console.log(openFilter)
        },
        [openFilter]
    )

    console.log(loading)

    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>
                            <FilterContainer>
                                <CategoriesContainer>
                                    <FilterHeader
                                        onClick={() =>
                                            openFilters('categories')
                                        }
                                    >
                                        <Title>Catergories</Title>
                                        {openFilter.includes('categories') ? (
                                            <ExpandLess
                                                sx={{ color: '#F27A1A' }}
                                            />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </FilterHeader>
                                    <Categories
                                        height={
                                            openFilter.includes('categories') &&
                                            categoryFilter.length >= 10
                                                ? '200px'
                                                : openFilter.includes(
                                                      'categories'
                                                  ) &&
                                                  categoryFilter.length < 10
                                                ? 'fit-content'
                                                : '0px'
                                        }
                                    >
                                        <Filters>
                                            {categoryFilter.map((item) => (
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
                                                    <FilterName>
                                                        {item}
                                                    </FilterName>
                                                </FilterItem>
                                            ))}
                                        </Filters>
                                    </Categories>
                                </CategoriesContainer>
                                <CategoriesContainer>
                                    <FilterHeader
                                        onClick={() => openFilters('gender')}
                                    >
                                        <Title>Gender</Title>
                                        {openFilter.includes('gender') ? (
                                            <ExpandLess
                                                sx={{ color: '#F27A1A' }}
                                            />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </FilterHeader>
                                    <Categories
                                        height={
                                            openFilter.includes('gender') &&
                                            genderFilter.length >= 4
                                                ? '105px'
                                                : openFilter.includes(
                                                      'gender'
                                                  ) && genderFilter.length < 4
                                                ? 'fit-content'
                                                : '0px'
                                        }
                                    >
                                        <Filters>
                                            {genderFilter.map((item) => (
                                                <FilterItem
                                                    key={item}
                                                    // onClick={() => setGender(item)}
                                                    onClick={() =>
                                                        setCat({
                                                            ...cat,
                                                            gender: item,
                                                        })
                                                    }
                                                >
                                                    <Check type="checkbox" />{' '}
                                                    <FilterName>
                                                        {item}
                                                    </FilterName>
                                                </FilterItem>
                                            ))}
                                        </Filters>
                                    </Categories>
                                </CategoriesContainer>
                                <CategoriesContainer>
                                    <FilterHeader
                                        onClick={() => openFilters('brand')}
                                    >
                                        <Title>Brand</Title>
                                        {openFilter.includes('brand') ? (
                                            <ExpandLess
                                                sx={{ color: '#F27A1A' }}
                                            />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </FilterHeader>
                                    <Categories
                                        height={
                                            openFilter.includes('brand') &&
                                            brandFilter.length >= 10
                                                ? '200px'
                                                : openFilter.includes(
                                                      'brand'
                                                  ) && brandFilter.length < 10
                                                ? 'fit-content'
                                                : '0px'
                                        }
                                    >
                                        <Filters>
                                            {brandFilter.map((item) => (
                                                <FilterItem
                                                    key={item}
                                                    // onClick={() => setBrand(item)}
                                                    onClick={() =>
                                                        setCat({
                                                            ...cat,
                                                            brand: item,
                                                        })
                                                    }
                                                >
                                                    <Check type="checkbox" />{' '}
                                                    <FilterName>
                                                        {item}
                                                    </FilterName>
                                                </FilterItem>
                                            ))}
                                        </Filters>
                                    </Categories>
                                </CategoriesContainer>
                                <CategoriesContainer>
                                    <FilterHeader
                                        onClick={() => openFilters('size')}
                                    >
                                        <Title>Size</Title>
                                        {openFilter.includes('size') ? (
                                            <ExpandLess
                                                sx={{ color: '#F27A1A' }}
                                            />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </FilterHeader>
                                    <Categories
                                        height={
                                            openFilter.includes('size') &&
                                            sizeFilter.length >= 10
                                                ? '200px'
                                                : openFilter.includes('size') &&
                                                  sizeFilter.length < 10
                                                ? 'fit-content'
                                                : '0px'
                                        }
                                    >
                                        <Filters>
                                            {sizeFilter.map((item) => (
                                                <FilterItem
                                                    key={item}
                                                    // onClick={() => setSize(item)}
                                                    onClick={() =>
                                                        setCat({
                                                            ...cat,
                                                            size: item,
                                                        })
                                                    }
                                                >
                                                    <Check type="checkbox" />{' '}
                                                    <FilterName>
                                                        {item}
                                                    </FilterName>
                                                </FilterItem>
                                            ))}
                                        </Filters>
                                    </Categories>
                                </CategoriesContainer>
                            </FilterContainer>
                            <ProductsContainer>
                                <ListHeader>
                                    <ListHeadeTitle>
                                        {products.length} result
                                        {products.length > 1 ? 's' : null} are
                                        listed{' '}
                                        {location?.state?.item
                                            ? `for the search "${location?.state?.item}"`
                                            : null}
                                    </ListHeadeTitle>
                                    <FilterBy>
                                        <FilterByOption>
                                            Sort By:
                                        </FilterByOption>
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
                        </>
                    )}
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default List
