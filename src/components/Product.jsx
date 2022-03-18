import {
    AddShoppingCart,
    FavoriteBorder,
    FormatListNumbered,
    Preview,
    StarRate,
} from '@mui/icons-material';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import Reviews from './Reviews';

const ProductAction = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.2s ease-in-out;
`;
const CartTitle = styled.span`
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
`;

const ShoppingCartContainer = styled.div`
    margin-right: 0px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
`;
const Cart = styled.div`
    width: 100%;
    background-color: #232323;
    color: #fff;
    height: 0px;
    opacity: 0;
    z-index: 5;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #eea287;
        transition: all 0.2s ease-in-out;
    }
    &:hover ${ShoppingCartContainer} {
        margin-right: 10px;
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 540px;
    margin: 0px 10px;
    cursor: pointer;
    &:hover ${ProductAction} {
        opacity: 1;
        transform: translateX(0px);
        transition: all 0.2s ease-in-out;
    }
    &:hover ${Cart} {
        height: 40px;
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
`;
const ImageContainer = styled.div`
    height: 390px;
    position: relative;
    margin-bottom: 10px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const ProductStatus = styled.div``;
const Status = styled.div`
    position: absolute;
    top: ${(props) => props.order * 20}px;
    left: 20px;
    height: 48px;
    width: 48px;
    color: #fff;
    font-size: ${props => props.fs === 'Out of Stock' ? '11px' : '13px'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.bg};
`;
const ProductActionContainer = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    color: #fff;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #eea287;
        transition: background-color 0.2s ease-in-out;
    }
`;

const Favorite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:before {
        content: 'add to wishlist';
        position: absolute;
        font-size: 11px;
        font-weight: 300;
        display: flex;
        justify-content: start;
        align-items: center;
        color: #fff;
        width: 106px;
        height: 100%;
        border-radius: 15px;
        padding-left: 20px;
        background-color: #eea287;
        top: 0px;
        right: 0px;
        z-index: -5;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    &:hover::before {
        opacity: 1;
        visibility: visible;
        transition: all 0.2s ease-in-out;
        transform: translatex(-5px);
    }
`;
const InfoContainer = styled.div`
    text-align: center;
`;
const Categories = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Category = styled.span`
    margin-right: 5px;
    font-size: 13px;
    color: #ccc;
    &:hover {
        color: #ef837b;
    }
`;
const Title = styled.div`
    transition: all 0.3s ease;
    &:hover {
        color: #ef837b;
        transition: all 0.3s ease;
    }
`;
const Prices = styled.div`
    margin-bottom: 10px;
`;

const Product = ({img, status, categories, title, price, rate, reviews}) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={img} />
                <ProductStatus>
					{status.map(item => <Status fs={item.title} key={item.id} order={item.order} bg={item.bg}>{item.title}</Status>)}
                    {/* <Status order="1" bg="#EF837B">
                        Sale
                    </Status> */}
                </ProductStatus>
                <ProductAction>
                    <ProductActionContainer>
                        <Favorite>
                            <FavoriteBorder style={{ fontSize: 16 }} />
                        </Favorite>
                    </ProductActionContainer>
                    <ProductActionContainer>
                        <Tooltip title="Quick View" placement="right-end">
                            <Preview style={{ fontSize: 16 }} />
                        </Tooltip>
                    </ProductActionContainer>
                </ProductAction>
                <Cart>
                    <ShoppingCartContainer>
                        <FormatListNumbered style={{ fontSize: 15 }} />
                    </ShoppingCartContainer>
                    <CartTitle>Select Options</CartTitle>
                </Cart>
            </ImageContainer>
            <InfoContainer>
                <Categories>
					{categories.map(item => <Category key={item}>{item}</Category>)}
                    {/* <Category>Women</Category>
                    <Category>Clothing</Category> */}
                </Categories>
                <Title>{title}</Title>
                <Prices>$ {price}</Prices>
                <Reviews/>
            </InfoContainer>
        </Container>
    );
};

export default Product;
