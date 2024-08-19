import {
  AddShoppingCart,
  Facebook,
  FavoriteBorder,
  Instagram,
  Pinterest,
  Twitter,
} from '@mui/icons-material';
import styled from 'styled-components';
import { css } from 'styled-components';
import { MainImageComponent } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { SvgIcon } from '@mui/material';
import { useCallback, useState } from 'react';
import { addToCart } from '../redux/cartSlice';
import { mobile } from '../responsive';
import { selectUser } from '../redux/selectors';
import { useAddToCartMutation } from '../redux/ecommerceApi';

const Modal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
const ModalView = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: flex-start; */
  ${mobile({ flexDirection: 'column-reverse' })}
`;
const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  ${mobile({ flexDirection: 'row', margin: '10px 0px 0px 0px' })}
`;
const MainImageContainer = styled.div`
  position: relative;
  /* flex: 8; */
  overflow: hidden;
`;
const ProductStatuses = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;
`;
const Status = styled.div`
  padding: 3px 7px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  ${(props) => {
    if (props.bg === 'Sale') {
      return css`
        background-color: #ef837b;
      `;
    } else if (props.bg === 'New') {
      return css`
        background-color: #a6c76c;
      `;
    } else if (props.bg === 'Top') {
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
const ImageContainer = styled.div`
  height: 108px;
  width: 70px;
  margin-bottom: 7px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  opacity: ${(props) => (props.img === true ? '1' : '0.5')};
  border: ${(props) =>
    props.img === true ? '1px solid #f27a1a' : '1px solid #fff'};
  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in;
  }
  ${mobile({ margin: '0px 1.5px 10px' })}
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const ModalInfo = styled.div`
  flex: 1;
  padding-left: 15px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ebebeb;
    border-radius: 4px;
  }
  ${mobile({ paddingLeft: '0px' })}
`;
const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  line-height: 32px;
  ${mobile({ fontSize: '22px' })}
`;
const ProductPrice = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #f27a1a;
  margin-bottom: 10px;
  line-height: 25px;
`;
const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #777;
  margin-bottom: 15px;
  line-height: 24px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const FilterColor = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Color = styled.div`
  background-color: ${(props) => props.bg};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 7px;
  cursor: pointer;
  border: 1.5px solid #fff;
  transition: all 0.2s ease-in;
  ${(props) => {
    if (props.shadow) {
      return css`
        box-shadow: 0px 0px 2px 1px rgba(34, 60, 80, 0.39);
        transition: all 0.2s ease-in;
      `;
    } else {
      return css`
        box-shadow: none;
        transition: all 0.3s ease-in-out;
      `;
    }
  }}
  &:hover {
    box-shadow: 0px 0px 2px 1px rgba(34, 60, 80, 0.39);
    transition: all 0.2s ease-in;
  }
`;
const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;
const FilterSize = styled.select`
  padding: 7px 10px;
  font-size: 14px;
  font-weight: 400;
  color: #777;
  outline: none;
  margin-left: 40px;
  border: 1px solid #d7d7d7;
`;
const Size = styled.option``;

const AmountContainer = styled.div`
  margin-left: 43px;
  border: 1px solid #d7d7d7;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 400;
  color: #777;
  width: 95px;
  display: flex;
  justify-content: space-between;
`;
const AmountChangeBtn = styled.button`
  background: transparent;
  border: transparent;
  color: #777;
  cursor: pointer;
  &:hover {
    color: #f27a1a;
  }
`;
const Amount = styled.span``;

const CartButtonContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #d7d7d7;
`;
const AddToCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 43px;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
  color: #f27a1a;
  border: 1px solid #f27a1a;
  transition: all 0.2s ease-in;
  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    color: #777;
    border: 1px solid #777;
    background-color: transparent;
  }
  &:hover {
    background-color: #f27a1a;
    color: #fff;
    transition: all 0.2s ease-in;
  }
`;
const WishlistBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  text-transform: uppercase;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  margin-left: 40px;
  border: transparent;
  transition: all 0.3s ease-in;
  &:hover {
    color: #f27a1a;
    transition: all 0.3s ease-in;
  }
`;
const ProductCategory = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;
const CategoryTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin-right: 10px;
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
`;
const Category = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #666;
  /* margin-right: 5px; */
`;
const SharContainer = styled(ProductCategory)``;

const SocialContainer = styled(Categories)`
  color: #666;
`;
const StyledSocial = styled(SvgIcon)`
  font-size: 20px !important;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    color: #f27a1a;
  }
`;

export const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');
  const dispatch = useDispatch();
  const [image, setImage] = useState(product.img[0]);
  const user = useSelector(selectUser);
  const [sendToCart, { isLoading, isError }] = useAddToCartMutation();

  const onSetImage = useCallback((item) => {
    setImage(item);
  }, []);

  const onChooseColor = (color) => {
    setProductColor(color);
  };

  const onSetQuantity = (exp) => {
    if (exp === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const onAddToCart = async () => {
    let data = {
      productId: product._id,
      brand: product.brand,
      title: product.title,
      img: product.img[0],
      productColor,
      productSize,
      price: product.price,
      quantity,
    };

    try {
      if (!user) {
        dispatch(addToCart({ ...data, total: product.price * quantity }));
      } else {
        await sendToCart({
          data,
          userId: user._id,
        }).unwrap();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <ModalView>
        <Images>
          {product?.img?.map((item, i) => (
            <ImageContainer img={item === image ? true : false} key={i}>
              <Image onClick={() => onSetImage(item)} key={i} src={item} />
            </ImageContainer>
          ))}
        </Images>
        <MainImageContainer>
          <ProductStatuses>
            {product.status?.map((item) => (
              <Status key={item} bg={item}>
                {item}
              </Status>
            ))}
          </ProductStatuses>
          <MainImageComponent image={image} />
        </MainImageContainer>
      </ModalView>
      <ModalInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>$ {product.price}</ProductPrice>
        <ProductDescription>{product.desc}</ProductDescription>
        <FilterContainer>
          <FilterTitle>Color:</FilterTitle>
          <FilterColor>
            {product.color?.map((item) => (
              <Color
                onClick={() => onChooseColor(item)}
                key={item}
                bg={`#${item}`}
                shadow={productColor === item ? true : null}
              />
            ))}
          </FilterColor>
        </FilterContainer>
        {product.size?.length > 0 && (
          <FilterContainer>
            <FilterTitle>Size:</FilterTitle>
            <FilterSize onChange={(e) => setProductSize(e.target.value)}>
              <Size>Select a size</Size>
              {product.size?.map((item) => (
                <Size key={item}>{item}</Size>
              ))}
            </FilterSize>
          </FilterContainer>
        )}
        <FilterContainer>
          <FilterTitle>Qty:</FilterTitle>
          <AmountContainer>
            <AmountChangeBtn onClick={() => onSetQuantity('dec')}>
              -
            </AmountChangeBtn>
            <Amount>{quantity}</Amount>
            <AmountChangeBtn onClick={() => onSetQuantity('inc')}>
              +
            </AmountChangeBtn>
          </AmountContainer>
        </FilterContainer>
        <CartButtonContainer>
          <AddToCartBtn
            onClick={onAddToCart}
            disabled={
              (!productColor || !productSize) && product.size?.length > 0
                ? true
                : !productColor && product.size?.length === 0
                  ? true
                  : false
            }
          >
            <AddShoppingCart
              sx={{
                fontSize: '14px',
                marginRight: '7px',
              }}
            />
            Add to card
          </AddToCartBtn>
          <WishlistBtn>
            <FavoriteBorder
              sx={{
                color: '#F27A1A',
                fontSize: '14px',
                marginRight: '7px',
              }}
            />
            Add to wishlist
          </WishlistBtn>
        </CartButtonContainer>

        <ProductCategory>
          <CategoryTitle>Category:</CategoryTitle>
          <Categories>
            {product.category?.map((item, i) => (
              <Category key={i}>{(i ? ', ' : '') + item}</Category>
            ))}
          </Categories>
        </ProductCategory>
        <SharContainer>
          <CategoryTitle>Share:</CategoryTitle>
          <SocialContainer>
            <StyledSocial component={Facebook} />
            <StyledSocial component={Twitter} />
            <StyledSocial component={Instagram} />
            <StyledSocial component={Pinterest} />
          </SocialContainer>
        </SharContainer>
      </ModalInfo>
    </Modal>
  );
};
