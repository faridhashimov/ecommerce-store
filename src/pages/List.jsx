import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import {
    Footer,
    ListFilters,
    ListProduct,
    Navbar,
    SearchFilterItem,
    Spinner,
} from '../components'
import { Products } from '../pages'

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
    opacity: ${(props) => props.opacity};
`
const ProductsContainer = styled.div`
    flex: 5;
    align-self: flex-start;
`
const ListHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 10px 20px;
`
const ListHeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
`
const ListHeaderBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    padding-bottom: 5px;
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

const Main = styled.div``

const List = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])

    const sp = new URLSearchParams(location.search)
    const category = sp.get('category') || 'all'
    const brand = sp.get('brand') || 'all'
    const status = sp.get('status') || 'all'
    const gender = sp.get('gender') || 'all'
    const size = sp.get('size') || 'all'
    const color = sp.get('color') || 'all'
    const page = sp.get('page') || 1

    const [filters, setFilters] = useState({
        categoryFilter: [],
        brandFilter: [],
        sizeFilter: [],
        genderFilter: [],
        colorFilter: [],
    })

    console.log('render')

    const [cat, setCat] = useState(null)

    useEffect(() => {
        setCat({ ...cat, category, brand, gender, size, color })
    }, [location])

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()
        const getProducts = async () => {
            setLoading(true)
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/products?category=${encodeURIComponent(
                        category
                    )}&brand=${encodeURIComponent(
                        brand
                    )}&gender=${gender}&size=${size}&color=${color}&status=${status}&page=${page}`,

                    {
                        cancelToken: source.token,
                    }
                )
                if (isMounted) {
                    setProducts(res.data)
                    // window.history.replaceState(null, '')
                    setError(null)
                    const allCats = [
                        ...new Set(
                            res.data.map((item) => item.category).flat()
                        ),
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
                    const allColors = [
                        ...new Set(res.data.map((item) => item.color).flat()),
                    ]
                    setFilters({
                        categoryFilter: allCats,
                        brandFilter: allBrands,
                        sizeFilter: allSizes,
                        genderFilter: allGenders,
                        colorFilter: allColors,
                    })
                }
            } catch (error) {
                if (isMounted) {
                    setError(error.message)
                    setProducts(null)
                }
            } finally {
                isMounted && setLoading(false)
            }
        }
        getProducts()

        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp
    }, [cat, category, brand, gender, size, color, status])

    const getFiltersUrl = (filter) => {
        const filterCategory = Object.entries(cat)
            .flat()
            .includes(filter.category)
            ? 'all'
            : filter.category || category
        const filterBrand = Object.entries(cat).flat().includes(filter.brand)
            ? 'all'
            : filter.brand || brand
        const filterGender = Object.entries(cat).flat().includes(filter.gender)
            ? 'all'
            : filter.gender || gender
        const filterSize = Object.entries(cat).flat().includes(filter.size)
            ? 'all'
            : filter.size || size
        const filterColor = Object.entries(cat).flat().includes(filter.color)
            ? 'all'
            : filter.color || color

        return `/list?category=${encodeURIComponent(
            filterCategory
        )}&brand=${encodeURIComponent(
            filterBrand
        )}&gender=${filterGender}&size=${filterSize}&color=${filterColor}`
    }

    return (
        <>
            <Navbar />
            <Container>
                <Wrapper opacity={loading ? 0.5 : 1}>
                    {/* {loading ? (
                        <Spinner />
                    ) : (
                        <> */}
                    <ListFilters
                        cat={cat}
                        setCat={setCat}
                        filters={filters}
                        getFiltersUrl={getFiltersUrl}
                        filterUrl={{
                            category,
                            brand,
                            gender,
                            size,
                            color,
                            status,
                        }}
                    />

                    <ProductsContainer>
                        <ListHeader>
                            <ListHeaderTop>
                                <ListHeadeTitle>
                                    {products.length} result
                                    {products.length > 1 ? 's' : null}
                                    {' are listed for your search'}
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
                            </ListHeaderTop>
                            <ListHeaderBottom>
                                {cat &&
                                    Object.entries(cat).map(([key, value]) => (
                                        <SearchFilterItem
                                            // onDeleteFilter={onDeleteFilter}
                                            getFiltersUrl={getFiltersUrl}
                                            key={key}
                                            info={cat[key]}
                                            ct={key}
                                        />
                                    ))}
                            </ListHeaderBottom>
                        </ListHeader>
                        <Main>
                            <Products products={products} />
                        </Main>
                    </ProductsContainer>
                    {/* </>
                    )} */}
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default List
