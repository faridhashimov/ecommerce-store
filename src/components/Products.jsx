import styled from 'styled-components';

import Product from './Product';

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: center;
`;

const Products = (props) => {
    const {products} = props;
    console.log(products);
    return (
        <Container>
            {products.map(item => (
                <Product key={item.id} {...item} />
            ))}
        </Container>
    );
};

export default Products;
