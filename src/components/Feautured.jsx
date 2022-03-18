import styled from 'styled-components';
import Products from './Products';
import { products } from '../data';


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
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        color: #333;
        transition: all .3s ease-in-out;
    }
`;

const Feautured = () => {
    const active = {color: '#333', borderBottom: '1.5px solid #333'}

    return (
        <Container>
            <Wrapper>
                <Filters>
                    <FilterButton style={active}>Featured</FilterButton>
                    <FilterButton>On Sale</FilterButton>
                    <FilterButton>Top Rated</FilterButton>
                </Filters>
                <Products products={products} />
            </Wrapper>
        </Container>
    );
};

export default Feautured;
