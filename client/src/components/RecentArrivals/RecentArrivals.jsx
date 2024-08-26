import { ArrowRightAltOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import { css } from 'styled-components';
import Spinner from '../Spinner/Spinner';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
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
const Title = styled.div`
  margin-bottom: 15px;
  text-align: center;
  font-size: 32px;
  line-height: 34px;
  color: #333;
  font-weight: 600;
  ${mobile({ fontSize: '28px' })}
`;
const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const FilterButton = styled.div`
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  /* color: #777777; */
  margin: 0px 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f27a1a;
    transition: all 0.3s ease-in-out;
  }
  ${(props) => {
    if (props.bg) {
      return css`
        color: #f27a1a;
        border-bottom: 1.7px solid #f27a1a;
        transition: all 0.3s ease-in-out;
      `;
    } else {
      return css`
        color: #777777;
        border-bottom: 1.7px solid #fff;
        transition: all 0.3s ease-in-out;
      `;
    }
  }}
  ${mobile({ fontSize: '12px' })}
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const InfoButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #232323;
  border: 2px solid #232323;
  padding: 10px 24px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #232323;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

const ProductsContainer = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecentArrivals = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [active, setActive] = useState('All');

  const { data, isError, isLoading, error } = useGetAllProductsQuery({
    order: 'new',
  });

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  const filters = data
    ? [...new Set(data.map((product) => product.gender).flat())]
    : null;

  const handleClick = (e) => {
    const productType = e.target.getAttribute('data-id');
    setActive(productType);
    if (productType !== 'All') {
      setFilteredProducts(
        data.filter(
          (product) =>
            product.category.indexOf(productType) > -1 ||
            product.gender === productType
        )
      );
    } else {
      setFilteredProducts(data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Recent Arrivals</Title>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorMsg error={error?.message} />
        ) : filteredProducts ? (
          <>
            <Filters>
              <FilterButton
                bg={active === 'All' ? true : false}
                onClick={handleClick}
                data-id="All"
              >
                All
              </FilterButton>
              {filters.map((filter) => (
                <FilterButton
                  key={filter}
                  bg={active === filter ? true : false}
                  onClick={handleClick}
                  data-id={filter}
                >
                  {filter}
                </FilterButton>
              ))}
              <FilterButton
                bg={active === 'Shoes' ? true : false}
                onClick={handleClick}
                data-id="Shoes"
              >
                Shoes & Boots
              </FilterButton>
            </Filters>
            <ProductsContainer>
              <Products products={filteredProducts.slice(0, 8)} />
            </ProductsContainer>
          </>
        ) : null}
        {data?.length > 0 ? (
          <ButtonContainer>
            <InfoButton to="/list">
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
  );
};
