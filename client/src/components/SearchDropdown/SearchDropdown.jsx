import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import Spinner from '../Spinner/Spinner';

const MainContainer = styled.div`
  position: absolute;
  top: 53px;
  z-index: 1000;
  background-color: #f4f4f4;
  border-color: #fff;
  min-width: 450px;
  width: max-content;
  box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;
const MainWrapper = styled.div``;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemContainer = styled(Link)`
  text-decoration: none;
  color: #8d8d8d;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 7px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
`;
const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  object-fit: cover;
`;
const Title = styled.p`
  flex: 1 1;
`;
const Price = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #f27a1a;
`;
export const SearchDropdown = ({ items, isLoading, isError, error }) => {
  return (
    <MainContainer>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMsg error={error.data} />
      ) : (
        <MainWrapper>
          <ItemsContainer>
            {items.map(({ _id, img, title, price }) => (
              <ItemContainer key={_id} to={`/product/${_id}`}>
                <ItemImage src={img[3]} />
                <Title>{title}</Title>
                <Price>${price}</Price>
              </ItemContainer>
            ))}
          </ItemsContainer>
        </MainWrapper>
      )}
    </MainContainer>
  );
};
