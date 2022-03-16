import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import {
    FavoriteBorder,
    Search,
    ShoppingCartOutlined,
} from '@mui/icons-material';

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    width: 90vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div``;
const Logo = styled.h1`
    font-weight: bold;
    font-size: 28px;
    color: #232323;
`;
const Reverse = styled.span`
    color: #eea287;
`;
const Center = styled.div``;
const Menu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MenuItem = styled.li`
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    /* padding: 10px 0px 5px; */
    /* transition: all 0.3s ease; */
    &:after {
        content: '';
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
`;
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    overflow: hidden;
    border-radius: 25px;
`;
const Input = styled.input`
    height: 100%;
    padding: 10px 25px;
    border: none;
    font-size: 14px;
    /* display: none; */
    &:focus {
        outline: none;
    }
`;
const SearchButton = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
const RightMenuIcon = styled.div`
    margin-left: 30px;
    color: #666666;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        color: #eea287;
    }
`;
const CartTotal = styled.span`
    font-size: 13px;
    margin-left: 12px;
    font-weight: 600;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        F<Reverse>R</Reverse>ED
                    </Logo>
                </Left>
                <Center>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Contact</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Login</MenuItem>
                    </Menu>
                </Center>
                <Right>
                    <SearchContainer>
                        <Input placeholder="Search product..." />
                        <SearchButton>
                            <Search
                                style={{
                                    color: '#EEA287',
                                    fontSize: 28,
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
    );
};

export default Navbar;
