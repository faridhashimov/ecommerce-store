import styled from 'styled-components';
import { ListProduct } from '../../components';
import { mobile } from '../../responsive';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-left: 20px;
  ${mobile({
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    paddingLeft: '0px',
  })}
`;
export const Products = ({ products, lastProdElRef }) => {
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
          );
        } else {
          return <ListProduct key={item._id} item={item} />;
        }
      })}
    </Container>
  );
};
