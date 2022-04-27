import { Navbar, Footer } from '../components'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`
const CarteHeader = styled.div`
    height: 200px;
    width: 100%;
    background: url('https://d-themes.com/react/molla/demo-8/images/page-header-bg.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const HeaderTitle = styled.h2`
    position: absolute;
    font-weight: 400;
    font-size: 40px;
    line-height: 44px;
    color: #232323;
    text-align: center;
    span {
        font-weight: 400;
        font-size: 20px;
        color: #eea287;
    }
`
const CartBody = styled.div`
    width: 93vw;
    margin: 0 auto;
    margin-bottom: 30px;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
`
const ProductsList = styled.div`
    flex: 5;
`
const CartTotal = styled.div`
    flex: 2;
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <CarteHeader>
                <HeaderTitle>
                    Shopping Cart <br /> <span>Shop</span>
                </HeaderTitle>
            </CarteHeader>
            <CartBody>
                <Wrapper>
                    <ProductsList></ProductsList>
                    <CartTotal></CartTotal>
                </Wrapper>
            </CartBody>
            <Footer />
        </Container>
    )
}

export default Cart
