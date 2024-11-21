import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: ${(props) => (props.width ? props.width : 100)}%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: red;
`;
export const ErrorMsg = ({ width }) => {
  return (
    <Container width={width}>
      Something went wrong: Please reload the page...
    </Container>
  );
};
