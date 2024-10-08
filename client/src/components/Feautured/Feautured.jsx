import styled from 'styled-components';
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import { css } from 'styled-components';
import Spinner from '../Spinner/Spinner';
import { mobile } from '../../responsive';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { useGetAllProductsQuery } from '../../redux/ecommerceApi';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;
const Wrapper = styled.div`
  width: 93vw;
  padding-bottom: 30px;
`;
const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
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
      `;
    } else {
      return css`
        color: #ccc;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in-out;
      `;
    }
  }}
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f27a1a;
    transition: all 0.3s ease-in-out;
  }

  ${mobile({ fontSize: '15px', margin: '0px 10px', padding: '4px' })}
`;
const ProductsContainer = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Feautured = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [active, setActive] = useState('All');

  const { data, isError, isLoading, error } = useGetAllProductsQuery({
    order: 'all',
  });

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  const handleClick = (e) => {
    const productStatus = e.target.getAttribute('data-id');
    setActive(productStatus);
    if (productStatus !== 'All') {
      setFilteredProducts(
        data.filter((product) => product.status.indexOf(productStatus) > -1)
      );
    } else {
      setFilteredProducts(data);
      return data;
    }
  };

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
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorMsg error={error.message} />
          ) : filteredProducts ? (
            <Products products={filteredProducts.slice(0, 4)} />
          ) : null}
        </ProductsContainer>
      </Wrapper>
    </Container>
  );
};
