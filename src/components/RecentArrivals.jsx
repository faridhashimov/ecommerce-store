import { ArrowRightAltOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import Products from './Products'
import { useEffect, useState } from 'react'
import { css } from 'styled-components'
import { useAxios } from '../hooks/useAxios'
import Spinner from './Spinner'

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
const Title = styled.div`
    margin-bottom: 15px;
    text-align: center;
    font-size: 32px;
    line-height: 34px;
    color: #333;
    font-weight: 600;
`
const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const FilterButton = styled.div`
    padding: 5px 10px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    color: #777777;
    margin: 0px 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #eea287;
        transition: all 0.3s ease-in-out;
    }
    ${(props) => {
        if (props.bg) {
            return css`
                color: #eea287;
                border-bottom: 1px solid #eea287;
                transition: all 0.3s ease-in-out;
            `
        } else {
            return css`
                color: #777777;
                border-bottom: 1px solid transparent;
                transition: all 0.3s ease-in-out;
            `
        }
    }}
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #232323;
    border: 2px solid #232323;
    padding: 10px 24px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #232323;
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
`

const ProductsContainer = styled.div`
    min-height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RecentArrivals = () => {
    const { data, error, loading } = useAxios(
        'http://localhost:5000/api/products'
    )
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [active, setActive] = useState('All')

    useEffect(() => {
        setProducts(data)
        setFilteredProducts(products)
    }, [data, products])

    const handleClick = (e) => {
        const productType = e.target.getAttribute('data-id')
        setActive(productType)
        if (productType !== 'All') {
            setFilteredProducts(
                products.filter(
                    (product) => product.category.indexOf(productType) > -1
                )
            )
        } else {
            setFilteredProducts(products)
        }
    }
    let spinner = loading ? <Spinner /> : null
    let content =
        !loading && data.length !== 0 ? (
            <Products products={filteredProducts} />
        ) : null
    let errorMsg =
        (!data || error) && !loading ? (
            <>
                <p style={{ color: 'red', textAlign: 'center' }}>
                    Something went wrong: {error}...
                </p>
            </>
        ) : null

    return (
        <Container>
            <Wrapper>
                <Title>Recent Arrivals</Title>
                <Filters>
                    <FilterButton
                        bg={active === 'All' ? true : false}
                        onClick={handleClick}
                        data-id="All"
                    >
                        All
                    </FilterButton>
                    <FilterButton
                        bg={active === 'Women' ? true : false}
                        onClick={handleClick}
                        data-id="Women"
                    >
                        Women
                    </FilterButton>
                    <FilterButton
                        bg={active === 'Men' ? true : false}
                        onClick={handleClick}
                        data-id="Men"
                    >
                        Men
                    </FilterButton>
                    <FilterButton
                        bg={active === 'Kids' ? true : false}
                        onClick={handleClick}
                        data-id="Kids"
                    >
                        Kids
                    </FilterButton>
                    <FilterButton
                        bg={active === 'Shoes' ? true : false}
                        onClick={handleClick}
                        data-id="Shoes"
                    >
                        Shoes & Boots
                    </FilterButton>
                </Filters>
                <ProductsContainer>
                    {spinner}
                    {content}
                    {errorMsg}
                </ProductsContainer>
                {data.length > 0 ? (
                    <ButtonContainer>
                        <InfoButton>
                            View More
                            <ArrowRightAltOutlined
                                style={{
                                    marginLeft: 12,
                                    fontSize: 15,
                                    fontWeight: 300,
                                }}
                            />
                        </InfoButton>
                    </ButtonContainer>
                ) : null}
            </Wrapper>
        </Container>
    )
}

export default RecentArrivals
