import { format, parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OrderStatus } from '..';
import { selectUser } from '../../redux/selectors';
import { mobile } from '../../responsive';

const SingleOrder = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-bottom: 15px;
`;
const OrderInfoHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  padding: 20px;
  border-bottom: 1px solid #e2e2e2;
  ${mobile({ flexDirection: 'column', alignItems: 'flex-start', gap: '7px' })}
`;
const OrderInfoTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const OrderInfoTitle = styled.span`
  color: #666;
  font-size: 13px;
  font-weight: 600;
`;
const OrderInfoDesc = styled.span`
  color: #333;
  font-size: 13px;
  font-weight: 400;
`;
const OrderDetailsBtn = styled(Link)`
  padding: 5px 30px;
  background-color: #f27a1a;
  border: 1px solid #f27a1a;
  border-radius: 3px;
  transition: all 0.2s ease-in;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    background-color: #f08936;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
`;
const OrderInfoBody = styled.div`
  padding: 20px;
`;
const OrderInfoBodyContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 17px 20px;
  border-radius: 5px;
  ${mobile({ flexDirection: 'column', padding: '10px 5px;' })}
`;
const OrderProductsImages = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginTop: '10px' })}
`;
const OrderImageContainer = styled.div`
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0px 2.5px;
`;
const OrderImageWrapper = styled.div`
  height: 60px;
  width: 40px;
`;
const OrderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Order = (order) => {
  const { _id, amount, products, createdAt } = order;
  let user = useSelector(selectUser);

  let orderDate = format(parseISO(createdAt), "d MMMM y '-' k:m");

  return (
    <SingleOrder>
      <OrderInfoHeader>
        <OrderInfoTitleContainer>
          <OrderInfoTitle>Order date</OrderInfoTitle>
          <OrderInfoDesc>{orderDate}</OrderInfoDesc>
        </OrderInfoTitleContainer>
        <OrderInfoTitleContainer>
          <OrderInfoTitle>Buyer</OrderInfoTitle>
          <OrderInfoDesc>{user.username}</OrderInfoDesc>
        </OrderInfoTitleContainer>
        <OrderInfoTitleContainer>
          <OrderInfoTitle>Order total</OrderInfoTitle>
          <OrderInfoDesc>$ {amount}</OrderInfoDesc>
        </OrderInfoTitleContainer>
        <OrderDetailsBtn to={_id}>Order Details</OrderDetailsBtn>
      </OrderInfoHeader>
      <OrderInfoBody>
        <OrderInfoBodyContainer>
          {/* Order Status */}
          <OrderStatus {...order} />

          {/* Order Products Image */}
          <OrderProductsImages>
            {products.map((product) => (
              <OrderImageContainer key={product._id}>
                <OrderImageWrapper>
                  <Link to={'/product/' + product._id}>
                    <OrderImage src={product.img[0]} />
                  </Link>
                </OrderImageWrapper>
              </OrderImageContainer>
            ))}
          </OrderProductsImages>
        </OrderInfoBodyContainer>
      </OrderInfoBody>
    </SingleOrder>
  );
};
