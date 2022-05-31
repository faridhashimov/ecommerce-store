import styled from 'styled-components'
import { ListProduct } from '../components'


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-left: 20px;
`
const Products = ({products}) => {
  return (
    <Container>
    {products.map((item) => (
        <ListProduct key={item._id} {...item} />
    ))}
</Container>
  )
}

export default Products