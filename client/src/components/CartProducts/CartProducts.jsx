import { Close } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const ProductsListHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  ${mobile({ display: 'none', marginBottom: '5px' })}
`;
const ProductsListBodyElement = styled(ProductsListHeader)`
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spase-between',
    padding: '10px 0px',
  })}
`;
const ImageTitleContainer = styled.div`
  flex: 14;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  position: relative;
  ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`;
const PriceContainer = styled.div`
  flex: 4;
  ${mobile({ marginBottom: '10px' })}
`;
const StockStatusContainer = styled.div`
  flex: 4;
  ${mobile({ marginBottom: '10px' })}
`;
const TotalContainer = styled.div`
  flex: 4;
  color: #f27a1a;
  ${mobile({ marginBottom: '10px' })}
`;
const DeleteContainer = styled.div`
  flex: 1;
  ${mobile({ position: 'absolute', right: '20px' })}
`;
const ImagerContainer = styled.div`
  cursor: pointer;
  height: 65px;
  margin-right: 30px;
  padding: 2px;
  border: 1px solid #999;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in;
  }
  ${mobile({ margin: '0px 0px 10px 0px ' })}
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Title = styled.h3`
  width: 200px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  ${mobile({ textAlign: 'center' })}
`;
const Price = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const StockStatus = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #f27a1a;
`;
const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const ProductSize = styled.span`
  margin-left: 10px;
  position: absolute;
  right: 55px;
  ${mobile({ right: '35px' })}
`;
const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  margin-left: 10px;
  position: absolute;
  right: 20px;
  ${mobile({ height: '15px', width: '15px', right: '10px', top: '24px' })}
`;
const AmountContainer = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  overflow: hidden;
  font-size: 12px;
  font-weight: 400;
  color: #777;
  width: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AmountChangeBtn = styled.button`
  padding: 7px 5px;
  background: transparent;
  border: transparent;
  color: #f27a1a;
  background-color: #fafafa;
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    background-color: #e6e6e6;
    transition: all ease-in 0.2s;
  }
  &:disabled {
    color: #cacaca;
  }
  &:first-child {
    border-right: 1px solid #e6e6e6;
  }
  &:last-child {
    border-left: 1px solid #e6e6e6;
  }
`;
const Amount = styled.span`
  text-align: center;
`;

export const CartProducts = ({ item, handleClick, handleDelete }) => {
  return (
    <ProductsListBodyElement>
      <ImageTitleContainer fl="14">
        <ImagerContainer>
          <Image src={item.img} alt={item.title} />
        </ImagerContainer>
        <Title>{item.title}</Title>
        <ProductSize>{item.productSize}</ProductSize>
        <ProductColor bg={item.productColor} />
      </ImageTitleContainer>
      <PriceContainer fl="4">
        <Price>$ {item.price}</Price>
      </PriceContainer>
      <StockStatusContainer fl="4">
        <StockStatus>
          <AmountContainer>
            <AmountChangeBtn
              onClick={() => handleClick('dec', item)}
              disabled={item.quantity < 2 ? true : false}
            >
              -
            </AmountChangeBtn>
            <Amount>{item.quantity}</Amount>
            <AmountChangeBtn onClick={() => handleClick('inc', item)}>
              +
            </AmountChangeBtn>
          </AmountContainer>
        </StockStatus>
      </StockStatusContainer>
      <TotalContainer fl="4">
        ${(item.quantity * item.price).toFixed(2)}
      </TotalContainer>
      <DeleteContainer fl="1">
        <Delete onClick={() => handleDelete(item)}>
          <Close
            sx={{
              fontSize: '15px',
            }}
          />
        </Delete>
      </DeleteContainer>
    </ProductsListBodyElement>
  );
};
