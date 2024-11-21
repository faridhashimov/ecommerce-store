import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SingleOrderBody, Spinner } from '../../components';
import { useGetOrderQuery } from '../../redux/ecommerceApi';

const MyOrders = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SingleOrder = () => {
  const { id } = useParams();
  const { data: order, isLoading, isError, error } = useGetOrderQuery(id);

  const spinner = isLoading ? <Spinner /> : null;
  const content =
    !isLoading && order ? <SingleOrderBody order={order} /> : null;
  const errorMsg = isError ? <p>Something went wrong... {error}</p> : null;

  return (
    <>
      <MyOrders>
        {spinner}
        {content}
        {errorMsg}
      </MyOrders>
    </>
  );
};
