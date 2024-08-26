import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mobile } from '../responsive';
import { SvgIcon } from '@mui/material';
import { Categories, NavbarPopup, Spinner } from '.';
import SearchDropdown from './SearchDropdown';
import { selectProducts, selectUser, selectWishlist } from '../redux/selectors';
import {
  useGetSearchedProductsQuery,
  useLazyGetUserCartQuery,
} from '../redux/ecommerceApi';
import { useDebounce } from '../hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from '@mui/icons-material';

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 93vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 28px;
  color: #232323;
  margin-left: 10px;
  ${mobile({ marginLeft: '0px' })}
`;
const Reverse = styled.span`
  color: #f27a1a;
`;
const Center = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: 'none' })}
`;
const MenuItemContainer = styled.li`
  letter-spacing: 1px;
  position: relative;
  margin: 0px 2px;
  &:after {
    content: '';
    position: absolute;
    bottom: -11px;
    display: block;
    width: 0;
    height: 1.8px;
    background: #000;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
  a {
    padding: 10px 15px;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
  }
`;
const ShopAnimation = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  background-image: linear-gradient(
    -225deg,
    #0d350f 0%,
    #bee0bf 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  ${mobile({ marginRight: '0px' })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 25px;
  ${mobile({ display: 'none' })}
`;
const Input = styled.input`
  height: 100%;
  padding: 10px 25px;
  border: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  fill: '#F27A1A';
`;
const CartTotal = styled.span`
  font-size: 11px;
  margin-left: 5px;
  font-weight: 600;
`;
const StyledLink = styled(Link)`
  color: #666;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const Wishlist = styled.div`
  position: relative;
  margin-left: 10px;
  color: #666666;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  &:hover {
    color: #f27a1a;
    transition: all 0.2s ease;
  }
  &:hover ${StyledLink} {
    color: #f27a1a;
    transition: all 0.2s ease;
  }
`;
const Cart = styled(Wishlist)`
  position: relative;
  min-width: 168;
  height: 24px;
`;
const CartQt = styled.div`
  position: absolute;
  left: 14px;
  top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 400;
  padding: 1px;
  color: #fff;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #1976d2;
`;
const WishlistQt = styled(CartQt)``;

const StyledPersonIcon = styled(SvgIcon)`
  color: #666;
  font-size: 24px;
  transition: all 0.2s ease-in;
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0px 5px;
  border: 2px solid #666;
  transition: all 0.3s ease-in;
  cursor: pointer;
  transition: all 0.2s ease-in;
`;
const ProfileLink = styled(Link)`
  color: #666;
  font-size: 12px;
  text-decoration: none;
`;
const Profile = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
  &:hover ${ProfileContainer} {
    border: 2px solid #f27a1a;
    transition: all 0.1s ease-in;
  }
  &:hover ${StyledPersonIcon} {
    color: #f27a1a;
    transition: all 0.1s ease-in;
  }
  &:hover ${ProfileLink} {
    color: #f27a1a;
    transition: all 0.1s ease-in;
  }
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Navbar: React.FC = () => {
  const [popup, setPopup] = useState(false);
  const [openShop, setOpenShop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const product = useSelector(selectWishlist);
  const user = useSelector(selectUser);
  const products = useSelector(selectProducts);
  const [
    getUserCart,
    {
      isLoading: isCartLoading,
      // isError: isCartError,
      data: cart = { products: [] },
    },
  ] = useLazyGetUserCartQuery();

  useEffect(() => {
    if (user) {
      getUserCart(user._id);
    }
  }, [user, getUserCart]);
  // console.log(cart)

  const quantity = user
    ? cart.products.reduce((sum: number, curr) => sum + curr.quantity, 0)
    : products?.reduce((sum: number, curr) => sum + curr.quantity, 0);
  const totalSum: number = user
    ? cart.products.reduce(
        (sum: number, curr) => sum + curr.price * curr.quantity,
        0
      )
    : 0;

  const debouncedSearchQuery = useDebounce(searchTerm, 500);
  const {
    data: searchedProducts = [],
    isError,
    isLoading,
    error,
  } = useGetSearchedProductsQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery.length < 2,
  });

  let activeStyle = {
    borderBottom: '2px solid #000',
  };

  return (
    <Container>
      <Wrapper>
        <MainNav>
          <Left>
            <Logo>
              <Link
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                to="/"
              >
                F<Reverse>R</Reverse>ED
              </Link>
            </Logo>
          </Left>
          <Center onMouseLeave={() => setOpenShop(false)}>
            <Menu>
              <MenuItemContainer>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/"
                >
                  Home
                </NavLink>
              </MenuItemContainer>
              <MenuItemContainer>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/about"
                >
                  About
                </NavLink>
              </MenuItemContainer>
              <MenuItemContainer>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </MenuItemContainer>
              <MenuItemContainer>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </MenuItemContainer>

              <MenuItemContainer onMouseEnter={() => setOpenShop(true)}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/list"
                >
                  <ShopAnimation>Shop</ShopAnimation>
                </NavLink>
                <Categories openShop={openShop} />
              </MenuItemContainer>
            </Menu>
          </Center>
          <Right>
            <SearchContainer>
              <Input
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search product..."
              />
              <SearchButton>
                <Search
                  style={{
                    fontSize: 28,
                    fontWeight: 300,
                    marginRight: 15,
                    cursor: 'pointer',
                  }}
                />
              </SearchButton>
              {searchTerm.length > 0 && (
                <SearchDropdown
                  items={searchedProducts}
                  isLoading={isLoading}
                  isError={isError}
                  error={error}
                />
              )}
            </SearchContainer>
            {user ? (
              <>
                <Profile
                  onMouseEnter={() => setPopup(true)}
                  onMouseLeave={() => setPopup(false)}
                >
                  <ProfileContainer>
                    <StyledLink to="/profile/orders">
                      {user.img ? (
                        <ProfileImage src={user.img} />
                      ) : (
                        <StyledPersonIcon
                          sx={{ fontSize: '17px' }}
                          // component={Person}
                        />
                      )}
                    </StyledLink>
                  </ProfileContainer>
                  <ProfileLink to="/profile/orders">Profile</ProfileLink>
                  <NavbarPopup popup={popup} />
                </Profile>
              </>
            ) : (
              <Menu>
                <MenuItemContainer>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </MenuItemContainer>
              </Menu>
            )}
            <Wishlist>
              <StyledLink to="/wishlist">
                {product?.length > 0 && (
                  <WishlistQt>{product?.length}</WishlistQt>
                )}
                <FavoriteBorder sx={{ marginRight: '3px' }} />
                Favorites
              </StyledLink>
            </Wishlist>
            <Cart>
              {isCartLoading ? (
                <Spinner />
              ) : (
                <StyledLink to="/cart">
                  {quantity > 0 && <CartQt>{quantity}</CartQt>}
                  <ShoppingCartOutlined sx={{ marginRight: '3px' }} />
                  Shopping bag
                  <CartTotal>
                    {totalSum > 0 ? `($ ${totalSum})` : `(0)`}
                  </CartTotal>
                </StyledLink>
              )}
            </Cart>
          </Right>
        </MainNav>
      </Wrapper>
    </Container>
  );
};
