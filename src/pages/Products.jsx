import styled from 'styled-components'
import { ListProduct, Spinner } from '../components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-left: 20px;
`
const Products = ({ products, lastProdElRef }) => {
  console.log(products)
    return (
        <Container>
            {products.map((item, i) => {
                if (products.length === i + 1) {
                    return (
                        <ListProduct
                            lastProdElRef={lastProdElRef}
                            key={item._id}
                            item={item}
                        />
                    )
                } else {
                    return <ListProduct key={item._id} item={item} />
                }
            })}
        </Container>
    )
}

export default Products
