import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import {
    FavoriteBorder,
    Search,
    ShoppingCartOutlined,
} from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    width: 93vw;
    height: 100%;
    margin: 0 auto;
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
    color: #eea287;
`
const Center = styled.div``
const Menu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MenuItemContainer = styled.li`
    position: relative;
    margin: 0px 2px;
    &:after {
        content: '';
        position: absolute;
        bottom: -11px;
        display: block;
        width: 0;
        height: 2px;
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
`
const Input = styled.input`
    height: 100%;
    padding: 10px 25px;
    border: none;
    font-size: 14px;
    /* display: none; */
    &:focus {
        outline: none;
    }
`
const SearchButton = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    fill: '#EEA287';
`
const RightMenuIcon = styled.div`
    margin-left: 30px;
    color: #666666;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        color: #eea287;
    }
`
const CartTotal = styled.span`
    font-size: 13px;
    margin-left: 12px;
    font-weight: 600;
`

// const StyledLink = styled(NavLink)``

const Navbar = () => {
    let activeStyle = {
        borderBottom: '2px solid #000',
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        <Link style={{color: 'inherit', textDecoration: 'none'}} to="/">
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
                        {/* <MenuItemContainer>
                            <NavLink
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                to="/blog"
                            >
                                Blog
                            </NavLink>
                        </MenuItemContainer> */}
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
                    <RightMenuIcon>
                        <Badge badgeContent={1} color="primary">
                            <FavoriteBorder />
                        </Badge>
                    </RightMenuIcon>
                    <RightMenuIcon>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                        <CartTotal>$ 59,98</CartTotal>
                    </RightMenuIcon>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
