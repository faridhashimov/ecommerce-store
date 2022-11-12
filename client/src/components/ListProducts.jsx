import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { publicRequest } from '../requestMethods'
import ListProduct from './ListProduct'

const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-left: 20px;
`
const ListProducts = ({ cat, setLoading, setError, setFilters }) => {
    const [products, setProducts] = useState([])

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
                const res = await publicRequest.get(
                    cat
                        ? `products?${qs}`
                        : `products`,
                    {
                        cancelToken: source.token,
                    }
                )
                if (isMounted) {
                    setProducts(res.data)
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

                    setFilters({
                        categoryFilter: allCats,
                        brandFilter: allBrands,
                        sizeFilter: allSizes,
                        genderFilter: allGenders,
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
    }, [qs])
    return (
        <Products>
            {products.map((item) => (
                <ListProduct key={item._id} {...item} />
            ))}
        </Products>
    )
}

export default ListProducts
