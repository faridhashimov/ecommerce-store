import {
  Autorenew,
  Cancel,
  Check,
  LocalShippingOutlined,
} from '@mui/icons-material';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import { css } from 'styled-components';
import { mobile } from '../responsive';

const OrderStatusContainer = styled.div`
  width: 50%;
  ${mobile({ width: 'fit-content' })}
`;
const OrderStatusStatus = styled.span`
  font-size: 14px;
  font-weight: 400;
  ${(props) => {
    if (props.status === 'Pending') {
      return css`
        color: #33ffbb;
      `;
    } else if (props.status === 'Shipped') {
      return css`
        color: #01e6fb;
      `;
    } else if (props.status === 'Delivered') {
      return css`
        color: #59c15c;
      `;
    } else {
      return css`
        color: #ff5733;
      `;
    }
  }};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  ${mobile({ justifyContent: 'center' })}
`;
const OrderStatusInfo = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #333;
`;

export const OrderStatus = ({ status, createdAt, updatedAt, products }) => {
  return (
    <OrderStatusContainer>
      {status === 'Pending' ? (
        <>
          <OrderStatusStatus status={status}>
            <Autorenew sx={{ marginRight: '7px' }} />
            {status}
          </OrderStatusStatus>
          <OrderStatusInfo>
            {products.length} product(s) Pending fulfillment.
          </OrderStatusInfo>{' '}
        </>
      ) : status === 'Shipped' ? (
        <>
          <OrderStatusStatus status={status}>
            <LocalShippingOutlined sx={{ marginRight: '7px' }} />
            {status}
          </OrderStatusStatus>
          <OrderStatusInfo>
            {products.length} product(s) was handed over to the local carrier on{' '}
            {format(parseISO(updatedAt), 'd MMMM y')}.
          </OrderStatusInfo>{' '}
        </>
      ) : status === 'Delivered' ? (
        <>
          <OrderStatusStatus status={status}>
            <Check sx={{ marginRight: '7px' }} />
            {status}
          </OrderStatusStatus>
          <OrderStatusInfo>
            {products.length} product(s) was delivered on{' '}
            {format(parseISO(updatedAt), 'd MMMM y')}.
          </OrderStatusInfo>{' '}
        </>
      ) : (
        <>
          <OrderStatusStatus status={status}>
            <Cancel sx={{ marginRight: '7px' }} />
            {status}
          </OrderStatusStatus>
          <OrderStatusInfo>
            This order was cancelled on{' '}
            {format(parseISO(updatedAt), 'd MMMM y')}.
          </OrderStatusInfo>{' '}
        </>
      )}
    </OrderStatusContainer>
  );
};
