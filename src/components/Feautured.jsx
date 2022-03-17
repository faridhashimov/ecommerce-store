import styled from 'styled-components';
import Products from './Products';

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
    color: #333;
    margin: 0px 20px;
    cursor: pointer;
`;

const Feautured = () => {
    return (
        <Container>
            <Wrapper>
                <Filters>
                    <FilterButton>featured</FilterButton>
                    <FilterButton>on sale</FilterButton>
                    <FilterButton>top rated</FilterButton>
                </Filters>
                <Products />
            </Wrapper>
        </Container>
    );
};

export default Feautured;
