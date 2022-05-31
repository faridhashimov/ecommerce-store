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
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        for(var key of searchParams.keys()) {
            console.log(key);
          } // get new values onchange
    }, [])

    const [filters, setFilters] = useState({
        categoryFilter: [],
        brandFilter: [],
        sizeFilter: [],
        genderFilter: [],
        colorFilter: [],
    })

    const [cat, setCat] = useState(null)

    useEffect(() => {
        if (location?.state?.item) {
            setCat({ ...cat, category: location?.state?.item })
        } else if (location?.state?.brand) {
            setCat({ ...cat, brand: location?.state?.brand })
        } else if (location?.state?.status) {
            setCat({ ...cat, status: location?.state?.status })
        } else if (location?.state?.category && location?.state?.gender) {
            setCat({
                ...cat,
                category: location?.state?.category,
                gender: location?.state?.gender,
            })
        } else {
            setCat(null)
        }
    }, [location])

    const qs =
        cat &&
        Object.keys(cat)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(cat[key])}`
            )
            .join('&')

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()
        const getProducts = async () => {
            setLoading(true)
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?${qs}`
                        : `http://localhost:5000/api/products`,

                    {
                        cancelToken: source.token,
                    }
                )
                if (isMounted) {
                    setProducts(res.data)
                    window.history.replaceState(null, '')
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
    }, [cat, qs])

    // const onToggleFilter = (categ, id) => {
    //     if (cat && Object.entries(cat).flat().includes(id)) {
    //         setCat(
    //             Object.fromEntries(
    //                 Object.entries(cat).filter(([key, value]) => value !== id)
    //             )
    //         )
    //     } else {
    //         if (categ === 'gender') {
    //             setCat({ ...cat, gender: id })
    //         } else if (categ === 'size') {
    //             setCat({ ...cat, size: id })
    //         } else if (categ === 'brand') {
    //             setCat({ ...cat, brand: id })
    //         } else if (categ === 'category') {
    //             setCat({ ...cat, category: id })
    //         } else {
    //             setCat({ ...cat, color: id })
    //         }
    //     }
    // }

    const onDeleteFilter = (id) => {
        // console.log(id)
        setCat(
            Object.fromEntries(
                Object.entries(cat).filter(([key, value]) => value !== id)
            )
        )
    }

    // console.log(cat)

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
                        searchParams={setSearchParams}
                        setSearchParams={setSearchParams}
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
                                            onDeleteFilter={onDeleteFilter}
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
