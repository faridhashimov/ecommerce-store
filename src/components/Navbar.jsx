import { useState } from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import {
    FavoriteBorder,
    Person,
    Search,
    ShoppingCartOutlined,
} from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { mobile } from '../responsive'
import { SvgIcon } from '@mui/material'
import { Categories, NavbarPopup } from '../components'

const Container = styled.div`
    height: 90px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
`
const Wrapper = styled.div`
    width: 93vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MainNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div``
const Logo = styled.h1`
    font-weight: bold;
    font-size: 28px;
    color: #232323;
    margin-left: 10px;
`
const Reverse = styled.span`
    color: #f27a1a;
`
const Center = styled.div``
const Menu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ display: 'none' })}
`
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
        /* transition: width .3s; */
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
`
const ShopAnimation = styled.span`
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
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
`
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    overflow: hidden;
    border-radius: 25px;
    ${mobile({ display: 'none' })}
`
const Input = styled.input`
    height: 100%;
    padding: 10px 25px;
    border: none;
    font-size: 14px;
    &:focus {
        outline: none;
    }
`
const SearchButton = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    fill: '#F27A1A';
`
const CartTotal = styled.span`
    font-size: 13px;
    margin-left: 12px;
    font-weight: 600;
`
const StyledLink = styled(Link)`
    color: #666;
    transition: all 0.2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
`
const RightMenuIcon = styled.div`
    margin-left: 20px;
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
`
const StyledPersonIcon = styled(SvgIcon)`
    color: #666;
    font-size: 24px;
    transition: all 0.2s ease-in;
`
const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 20px;
    border: 2px solid #666;
    transition: all 0.3s ease-in;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        border: 2px solid #f27a1a;
        transition: all 0.2s ease-in;
    }
    &:hover ${StyledPersonIcon} {
        color: #f27a1a;
        transition: all 0.2s ease-in;
    }
`
const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Navbar = () => {
    const product = useSelector((state) => state.wishlist.product)
    const user = useSelector((state) => state.user.user)
    const products = useSelector((state) => state.cart.products)
    const quantity = products.reduce((sum, curr) => sum + curr.quantity, 0)

    const [popup, setPopup] = useState(false)

    let activeStyle = {
        borderBottom: '2px solid #000',
    }

    const totalSum = products
        .reduce((sum, prevValue) => sum + prevValue.total, 0)
        .toFixed(2)

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
                    <Center>
                        <Menu>
                            <MenuItemContainer>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </MenuItemContainer>
                            <MenuItemContainer>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </MenuItemContainer>
                            <MenuItemContainer>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </MenuItemContainer>
                            <MenuItemContainer>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to="/faq"
                                >
                                    FAQ
                                </NavLink>
                            </MenuItemContainer>
                            {!user ? (
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
                            ) : (
                                <MenuItemContainer
                                    onMouseEnter={() => setPopup(true)}
                                    onMouseLeave={() => setPopup(false)}
                                >
                                    <NavLink
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        to="/profile/orders"
                                    >
                                        Profile
                                    </NavLink>
                                    <NavbarPopup popup={popup} />
                                </MenuItemContainer>
                            )}
                            <MenuItemContainer>
                                <ShopAnimation>
                                    <NavLink
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                        to="/faq"
                                    >
                                        Shop
                                    </NavLink>
                                </ShopAnimation>
                            </MenuItemContainer>
                        </Menu>
                    </Center>
                    <Right>
                        <SearchContainer>
                            <Input placeholder="Search product..." />
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
                        </SearchContainer>
                        {user && (
                            <ProfileContainer>
                                <StyledLink to="/profile/orders">
                                    {user.img ? (
                                        <ProfileImage src={user.img} />
                                    ) : (
                                        <StyledPersonIcon component={Person} />
                                    )}
                                </StyledLink>
                            </ProfileContainer>
                        )}
                        <RightMenuIcon>
                            <Badge
                                badgeContent={product?.length}
                                color="primary"
                            >
                                <StyledLink to="/wishlist">
                                    <FavoriteBorder />
                                </StyledLink>
                            </Badge>
                        </RightMenuIcon>
                        <RightMenuIcon>
                            <Badge badgeContent={quantity} color="primary">
                                <StyledLink to="/cart">
                                    <ShoppingCartOutlined />
                                </StyledLink>
                            </Badge>
                            <StyledLink to="/cart">
                                <CartTotal>
                                    {totalSum > 0 ? `$ ${totalSum}` : `$ 0,00`}
                                </CartTotal>
                            </StyledLink>
                        </RightMenuIcon>
                    </Right>
                </MainNav>
                <Categories />
            </Wrapper>
        </Container>
    )
}

export default Navbar
