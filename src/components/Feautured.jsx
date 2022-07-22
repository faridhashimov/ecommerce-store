import styled from 'styled-components'
import Products from './Products'
import { useEffect, useState } from 'react'
import { css } from 'styled-components'
import Spinner from './Spinner'
import { mobile } from '../responsive'
import useEcomService from '../services/useEcomService'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
`
const Wrapper = styled.div`
    width: 93vw;
    padding-bottom: 30px;
`
const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const FilterButton = styled.div`
    padding: 8px 8px;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 600;
    color: #ccc;
    margin: 0px 20px;
    ${(props) => {
        if (props.bg) {
            return css`
                color: #f27a1a;
                border-bottom: 2px solid #f27a1a;
                transition: all 0.3s ease-in-out;
            `
        } else {
            return css`
                color: #ccc;
                border-bottom: 2px solid transparent;
                transition: all 0.3s ease-in-out;
            `
        }
    }}
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #f27a1a;
        transition: all 0.3s ease-in-out;
    }

    ${mobile({ fontSize: '15px', margin: '0px 10px', padding: '4px' })}
`

const ProductsContainer = styled.div`
    min-height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Feautured = () => {
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [active, setActive] = useState('All')

    const { error, getProducts, loading } = useEcomService()

    useEffect(() => {
        onProductsLoad()
    }, [])

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    const onProductsLoad = () => {
        getProducts().then((prod) => {
            setProducts(prod)
            setFilteredProducts(prod)
        })
    }

    const handleClick = (e) => {
        const productStatus = e.target.getAttribute('data-id')
        setActive(productStatus)
        if (productStatus !== 'All') {
            setFilteredProducts(
                products.filter(
                    (product) => product.status.indexOf(productStatus) > -1
                )
            )
        } else {
            setFilteredProducts(products)
            return products
        }
    }

    let spinner = loading ? <Spinner /> : null
    let content =
        !loading && filteredProducts ? (
            <Products products={filteredProducts.slice(0, 4)} />
        ) : null
    let errorMsg = error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>
            Something went wrong: {error}...
        </p>
    ) : null

    return (
        <Container>
            <Wrapper>
                <Filters>
                    <FilterButton
                        bg={active === 'All' ? true : false}
                        onClick={handleClick}
                        data-id="All"
                    >
                        Featured
                    </FilterButton>
                    <FilterButton
                        bg={active === 'Sale' ? true : false}
                        onClick={handleClick}
                        data-id="Sale"
                    >
                        On Sale
                    </FilterButton>
                    <FilterButton
                        bg={active === 'Top' ? true : false}
                        onClick={handleClick}
                        data-id="Top"
                    >
                        Top Rated
                    </FilterButton>
                </Filters>
                <ProductsContainer>
                    {spinner}
                    {content}
                    {errorMsg}
                </ProductsContainer>
            </Wrapper>
        </Container>
    )
}

export default Feautured
