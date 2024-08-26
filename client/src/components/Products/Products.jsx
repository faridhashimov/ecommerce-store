import Product from '../Product/Product';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: center;
  ${mobile({ gridTemplateColumns: 'repeat(2, 1fr)' })}
`;

export const Products = ({ products, loading }) => {
  return (
    <Container>
      {products.map((item) => (
        <Product key={item._id} {...item} />
      ))}
    </Container>
  );
};
