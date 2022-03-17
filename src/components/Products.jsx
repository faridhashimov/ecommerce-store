import {
    AddShoppingCart,
    FavoriteBorder,
    FormatListNumbered,
    Preview,
    StarRate,
} from '@mui/icons-material';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

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

const Product = styled.div`
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
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
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
const ReviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StarContainer = styled.div`
    margin-right: 10px;
`;
const Reviews = styled.div`
    font-size: 13px;
    color: #ccc;
`;

const Products = () => {
    return (
        <Container>
            <Product>
                <ImageContainer>
                    <Image src="https://d-themes.com/react_asset_api/molla/uploads/product_1_2_300x408_9e213baa0a.jpg" />
                    <ProductStatus>
                        <Status order="1" bg="#EF837B">
                            Sale
                        </Status>
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
                            <AddShoppingCart style={{ fontSize: 15 }} />
                        </ShoppingCartContainer>
                        <CartTitle>Add To Cart</CartTitle>
                    </Cart>
                </ImageContainer>
                <InfoContainer>
                    <Categories>Women, Clothing</Categories>
                    <Title>Printed Sweatshirt</Title>
                    <Prices>$7.99</Prices>
                    <ReviewContainer>
                        <StarContainer>
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                        </StarContainer>
                        <Reviews>( 3 Reviews )</Reviews>
                    </ReviewContainer>
                </InfoContainer>
            </Product>
            <Product>
                <ImageContainer>
                    <Image src="https://d-themes.com/react_asset_api/molla/uploads/product_2_2_300x408_edddfecb50.jpg   " />
                    <ProductStatus>
                        <Status order="1" bg="#A6C76C">
                            New
                        </Status>
                        <Status order="3" bg="#EF837B">
                            Sale
                        </Status>
                    </ProductStatus>
                    <ProductAction>
                        <ProductActionContainer>
                            <Favorite>
                                <FavoriteBorder style={{ fontSize: 16 }} />{' '}
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
                    <Categories>Women, Clothing</Categories>
                    <Title>Printed Sweatshirt</Title>
                    <Prices>$9.99 - $12.99</Prices>
                    <ReviewContainer>
                        <StarContainer>
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                        </StarContainer>
                        <Reviews>( 2 Reviews )</Reviews>
                    </ReviewContainer>
                </InfoContainer>
            </Product>
            <Product>
                <ImageContainer>
                    <Image src="https://d-themes.com/react_asset_api/molla/uploads/product_7_3_300x408_2e98eaeb9f.jpg" />
                    <ProductStatus>
                        <Status order="1" bg="#7DD2EA">
                            Top
                        </Status>
                    </ProductStatus>
                    <ProductAction>
                        <ProductActionContainer>
                            <Favorite>
                                <FavoriteBorder style={{ fontSize: 16 }} />{' '}
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
                    <Categories>Women, Clothing</Categories>
                    <Title>Printed Sweatshirt</Title>
                    <Prices>$19.99 - $25.99</Prices>
                    <ReviewContainer>
                        <StarContainer>
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#FCB941',
                                }}
                            />
                        </StarContainer>
                        <Reviews>( 40 Reviews )</Reviews>
                    </ReviewContainer>
                </InfoContainer>
            </Product>
            <Product>
                <ImageContainer>
                    <Image src="https://d-themes.com/react_asset_api/molla/uploads/product_12_2_300x408_040de8318b.jpg" />
                    <ProductStatus>
                        <Status order="1" bg="#A6C76C">
                            New
                        </Status>
                        <Status order="3" bg="#7DD2EA">
                            Top
                        </Status>
                    </ProductStatus>
                    <ProductAction>
                        <ProductActionContainer>
                            <Favorite>
                                <FavoriteBorder style={{ fontSize: 16 }} />{' '}
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
                            <AddShoppingCart style={{ fontSize: 15 }} />
                        </ShoppingCartContainer>
                        <CartTitle>Add To Cart</CartTitle>
                    </Cart>
                </ImageContainer>
                <InfoContainer>
                    <Categories>Women, Clothing</Categories>
                    <Title>Printed Sweatshirt</Title>
                    <Prices>$24.99</Prices>
                    <ReviewContainer>
                        <StarContainer>
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                            <StarRate
                                style={{
                                    fontSize: 16,
                                    color: '#CCCCCC',
                                }}
                            />
                        </StarContainer>
                        <Reviews>( 0 Reviews )</Reviews>
                    </ReviewContainer>
                </InfoContainer>
            </Product>
        </Container>
    );
};

export default Products;
