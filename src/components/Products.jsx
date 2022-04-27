import styled from 'styled-components'

import Product from './Product'
import ProductModal from './ProductModal'
import Spinner from './Spinner'

const Container = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: center;
`

const Products = (props) => {
    const { products, loading } = props

    // console.log('ok')

    return (
        <Container>
            {loading ? (
                <Spinner />
            ) : (
                products.map((item) => <Product key={item._id} {...item} />)
            )}
        </Container>
    )
}

export default Products
