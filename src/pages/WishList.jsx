import { Navbar, Footer } from '../components'
import styled from 'styled-components'
import {
    Close,
    FormatListNumbered,
    FavoriteBorderOutlined,
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishlist } from '../redux/wishlistSlice'
import { Link } from 'react-router-dom'

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
const Wrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    /* height: 400px; */
    padding: 0px 10px;
`
const ProductsList = styled.div`
    width: 100%;
    flex: 5;
`
const ProductsListHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid #cccccc;
    display: flex;
    align-items: center;
`
const Element = styled.div`
    flex: ${(props) => props.fl};
    background-color: ${(props) => props.bg};
    font-size: 12px;
    color: #999;
    padding: 20px 0px;
`
const ProductsListBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ProductsListBodyElement = styled(ProductsListHeader)``
const ImageTitleContainer = styled.div`
    flex: 14;
    display: flex;
    align-items: center;
    padding: 30px 0px;
`
const PriceContainer = styled.div`
    flex: 4;
`
const StockStatusContainer = styled.div`
    flex: 4;
`
const SelectContainer = styled.div`
    flex: 4;
`
const DeleteContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    height: 65px;
    margin-right: 30px;
`
const Title = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #232323;
`
const Price = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #eea287;
`
const StockStatus = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #eea287;
`
const Select = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    width: 100%;
    padding: 5px 0px;
    background: transparent;
    border: 1px solid #eea287;
    color: #eea287;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #eea287;
        color: #fff;
        transition: all 0.2s ease-in;
    }
`
const Delete = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    cursor: pointer;
    &:hover {
        color: black;
    }
`

const NoProductContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    span {
        font-size: 15px;
        color: #777;
    }
`
const GoShopBtn = styled(Link)`
    padding: 7px 45px;
    background-color: #eea287;
    border: 1px solid #c9866e;
    cursor: pointer;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    outline: none;
    text-decoration: none;
    &:hover {
        background-color: #c9866e;
    }
`

const WishList = () => {
    const product = useSelector((store) => store.wishlist.product)
    const dispatch = useDispatch()
    console.log(product)

    const handleDelete = (id) => {
        dispatch(deleteFromWishlist(id))
    }

    return (
        <Container>
            <Navbar />
            <CarteHeader>
                <HeaderTitle>
                    WishList <br /> <span>Shop</span>
                </HeaderTitle>
            </CarteHeader>

            <Wrapper>
                {product.length === 0 ? (
                    <NoProduct />
                ) : (
                    <ProductsList>
                        <ProductsListHeader>
                            <Element fl="14">
                                <span>Product</span>
                            </Element>
                            <Element fl="4">
                                <span>Price</span>
                            </Element>
                            <Element fl="4">
                                <span>Stock Status</span>
                            </Element>
                            <Element fl="4"></Element>
                            <Element fl="1"></Element>
                        </ProductsListHeader>
                        <ProductsListBody>
                            {product.map((item) => (
                                <ProductsListBodyElement key={item._id}>
                                    <ImageTitleContainer fl="14">
                                        <Image
                                            src={item.img[0]}
                                            alt={item.title}
                                        />
                                        <Title>{item.title}</Title>
                                    </ImageTitleContainer>
                                    <PriceContainer fl="4">
                                        <Price>$ {item.price}</Price>
                                    </PriceContainer>
                                    <StockStatusContainer fl="4">
                                        <StockStatus>In Stock</StockStatus>
                                    </StockStatusContainer>
                                    <SelectContainer fl="4">
                                        <Select>
                                            <FormatListNumbered
                                                sx={{
                                                    fontSize: '14px',
                                                    marginRight: '7px',
                                                }}
                                            />{' '}
                                            Select
                                        </Select>
                                    </SelectContainer>
                                    <DeleteContainer fl="1">
                                        <Delete
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
                                        >
                                            <Close sx={{ fontSize: '15px' }} />
                                        </Delete>
                                    </DeleteContainer>
                                </ProductsListBodyElement>
                            ))}
                        </ProductsListBody>
                    </ProductsList>
                )}
            </Wrapper>

            <Footer />
        </Container>
    )
}

const NoProduct = () => {
    return (
        <NoProductContainer>
            <FavoriteBorderOutlined sx={{ fontSize: '140px', color: '#666' }} />
            <span>No products added to wishlist</span>
            <GoShopBtn to='/'>Go Shop</GoShopBtn>
        </NoProductContainer>
    )
}

export default WishList
