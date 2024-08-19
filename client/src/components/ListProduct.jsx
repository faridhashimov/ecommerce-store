import {
  FavoriteBorder,
  FormatListNumbered,
  Preview,
  FavoriteOutlined,
} from '@mui/icons-material';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import ProductRate from './ProductRate';
import { css } from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { mobile } from '../responsive';
import { Link, useNavigate } from 'react-router-dom';
import Portal from '../Portal';
import ProductModal from './ProductModal';
import DiscountInfoComponent from './DiscountInfoComponent';
import { selectWishlist } from '../redux/selectors';

const ProductAction = styled.div`
  position: absolute;
  right: 20px;
  top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  background-color: rgba(36, 36, 36, 0.7);
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
    background-color: rgba(242, 124, 28, 0.7);
    transition: all 0.2s ease-in-out;
  }
  &:hover ${ShoppingCartContainer} {
    margin-right: 10px;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  ${mobile({
    display: 'none',
  })}
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.main}) center center/cover;
  transition: all 0.2s ease-in;
  &:hover {
    background: url(${(props) => props.sec}) center center/cover;
    transition: all 0.2s ease-in;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 470px;
  padding-bottom: 7px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 22px -8px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
  }
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
  ${mobile({
    height: 'max-content',
    paddingBottom: '7px',
    boxShadow: '0px 0px 12px -4px rgba(0, 0, 0, 0.25)',
  })}
`;
const ImageContainer = styled.div`
  height: 340px;
  position: relative;
  margin-bottom: 10px;
  ${mobile({ height: '66.66667vw', marginBottom: '0px' })}
`;
const ProductStatus = styled.div``;
const Status = styled.div`
  position: absolute;
  top: ${(props) => props.order * 25}px;
  left: 10px;
  height: 35px;
  width: 35px;
  color: #fff;
  font-size: ${(props) => (props.fs === 'Out Of Stock' ? '8.5px' : '11px')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  border: none;
  ${(props) => {
    if (props.fs === 'Sale') {
      return css`
        background-color: #ef837b;
      `;
    } else if (props.fs === 'New') {
      return css`
        background-color: #a6c76c;
      `;
    } else if (props.fs === 'Top') {
      return css`
        background-color: #7dd2ea;
      `;
    } else {
      return css`
        background-color: #cccccc;
      `;
    }
  }};
`;
const ProductActionContainer = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  color: #f27a1a;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.46);
  transition: all 0.2s ease-in-out;
`;
const FavoriteContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  color: #f27a1a;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.46);
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
    background-color: #f27a1a;
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
  text-align: left;
  padding: 0px 7px;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  })}
`;
const Title = styled.h2`
  transition: all 0.3s ease;
  font-size: 12.9px;
  font-weight: 400;
  line-height: 19px;
  color: #555;
  margin: 5px 0px;
  height: 40px;
  &:before {
    content: '${(props) => props.brand}';
    font-size: 14px;
    font-weight: 600;
    margin-right: 4px;
  }
  &:hover {
    color: #f27a1a;
    transition: all 0.3s ease;
  }
  ${mobile({
    fontSize: '12.9px',
    height: 'max-content',
    '&:before': {
      content: `${(props) => props.brand}`,
      fontSize: '12.9px',
      fontWeight: '600',
      marginRight: '4px',
    },
  })}
`;
const Prices = styled.h3`
  font-size: 15px;
  line-height: 16px;
  font-weight: 600;
  color: #f27a1a;
  margin: 7px 0px;
  ${mobile({ fontSize: '14px', color: '#F27A1A' })}
`;
const Rate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ReviewCount = styled.span`
  margin-left: 5px;
  color: #ccc;
  font-size: 10px;
  line-height: 16px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ListProduct = ({ item, lastProdElRef }) => {
  const [open, setOpen] = useState(false);
  const { img, status, title, price, reviews, brand } = item;
  const productInWishlist = useSelector(selectWishlist);
  let navigate = useNavigate();
  const rate = reviews
    ? reviews.reduce((a, c) => c.rating + a, 0) / reviews.length
    : null;
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (productInWishlist.length === 0) {
      dispatch(addToWishlist(item));
    } else if (productInWishlist.some((e) => e._id === item._id)) {
      navigate('/wishlist');
      return;
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const liked = productInWishlist.some((e) => e._id === item._id);

  return (
    <>
      <Container ref={lastProdElRef}>
        <ImageContainer>
          <StyledLink to={`/product/${item._id}`}>
            <Image main={img[0]} sec={img[1]} />
          </StyledLink>
          <ProductStatus>
            {status?.map((item, i) => (
              <Status fs={item} key={i} order={i + 1}>
                {item}
              </Status>
            ))}
          </ProductStatus>
          <FavoriteContainer>
            <Favorite onClick={handleAdd}>
              {liked ? (
                <FavoriteOutlined style={{ fontSize: 16 }} />
              ) : (
                <FavoriteBorder style={{ fontSize: 16 }} />
              )}
            </Favorite>
          </FavoriteContainer>
          <ProductAction>
            <ProductActionContainer onClick={() => setOpen(true)}>
              <Tooltip title="Quick View" placement="right-end">
                <Preview style={{ fontSize: 16 }} />
              </Tooltip>
            </ProductActionContainer>
          </ProductAction>
          <Cart>
            <ShoppingCartContainer>
              <FormatListNumbered style={{ fontSize: 17 }} />
            </ShoppingCartContainer>
            <StyledLink
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              to={`/product/${item._id}`}
            >
              <CartTitle>Select Options</CartTitle>
            </StyledLink>
          </Cart>
        </ImageContainer>
        <InfoContainer>
          <Title brand={brand}>{title}</Title>
          <Rate>
            <ProductRate fz={15} rate={rate} />
            <ReviewCount>({reviews.length})</ReviewCount>
          </Rate>
          <Prices>$ {price}</Prices>

          <DiscountInfoComponent status={status[0]} />
        </InfoContainer>
      </Container>
      {open && (
        <Portal>
          <ProductModal product={item} setOpen={setOpen} />
        </Portal>
      )}
    </>
  );
};
