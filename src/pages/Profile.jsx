import { Footer, Navbar } from '../components'
import styled from 'styled-components'
import {
    Email,
    LocationOn,
    Notifications,
    Person,
    RateReview,
    Store,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { mobile } from '../responsive'
import { NavLink, Outlet } from 'react-router-dom'

const Wrapper = styled.div`
    width: 93vw;
    /* max-width: 1210px; */
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
    ${mobile({ flexDirection: 'column' })}
`
const Sidebar = styled.div`
    flex: 1;
    color: #333;
    padding-right: 20px;
    margin-bottom: 20px;
    ${mobile({ padding: '10px' })}
`
const SidebarTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 10px 10px;
`
const NavContainer = styled.ul`
    list-style: none;
    ${mobile({ display: 'flex', flexDirection: 'column' })}
`
const StyledNavIcon = styled(SvgIcon)`
    font-size: 18px !important;
    /* color: #999; */
    margin-right: 10px;
    color: ${(props) => props.t};
`
const NavItem = styled.li`
    font-size: 14px;
    color: #333;
    text-decoration: none;
    font-weight: 400;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${(props) => props.bg};
    &:hover {
        background-color: #f2f2f2;
    }
    &:hover ${StyledNavIcon} {
        color: #eea287;
    }
`
const StyledNavLink = styled(NavLink)`
    color: transparent;
    text-decoration: none;
`
const Main = styled.main`
    flex: 4;
    margin-bottom: 30px;
`

const Profile = () => {


    return (
        <>
            <Navbar />
            <Wrapper>
                <Sidebar>
                    <SidebarTitle>My profile</SidebarTitle>
                    <NavContainer>
                        <StyledNavLink to="orders">
                            {({ isActive }) => (
                                <NavItem
                                    bg={isActive ? '#FFF1E6' : 'transparent'}
                                >
                                    <StyledNavIcon
                                        t={isActive ? '#eea287' : '#999'}
                                        component={Store}
                                    />
                                    My orders
                                </NavItem>
                            )}
                        </StyledNavLink>
                        <StyledNavLink to="reviews">
                            {({ isActive }) => (
                                <NavItem
                                    bg={isActive ? '#FFF1E6' : 'transparent'}
                                >
                                    <StyledNavIcon
                                        t={isActive ? '#eea287' : '#999'}
                                        component={RateReview}
                                    />
                                    My reviews
                                </NavItem>
                            )}
                        </StyledNavLink>
                        <StyledNavLink to="messages">
                            {({ isActive }) => (
                                <NavItem
                                    bg={isActive ? '#FFF1E6' : 'transparent'}
                                >
                                    <StyledNavIcon
                                        t={isActive ? '#eea287' : '#999'}
                                        component={Email}
                                    />
                                    My messages
                                </NavItem>
                            )}
                        </StyledNavLink>
                        <StyledNavLink to="userinfo">
                            {({ isActive }) => (
                                <NavItem
                                    bg={isActive ? '#FFF1E6' : 'transparent'}
                                >
                                    <StyledNavIcon
                                        t={isActive ? '#eea287' : '#999'}
                                        component={Person}
                                    />
                                    My user information
                                </NavItem>
                            )}
                        </StyledNavLink>
                        <StyledNavLink to="adresses">
                            {({ isActive }) => (
                                <NavItem
                                    bg={isActive ? '#FFF1E6' : 'transparent'}
                                >
                                    <StyledNavIcon
                                        t={isActive ? '#eea287' : '#999'}
                                        component={LocationOn}
                                    />
                                    My adresses
                                </NavItem>
                            )}
                        </StyledNavLink>
                        <StyledNavLink to="settings">
                            {({ isActive }) => (
                                <NavItem
                                    bg={isActive ? '#FFF1E6' : 'transparent'}
                                >
                                    <StyledNavIcon
                                        t={isActive ? '#eea287' : '#999'}
                                        component={Notifications}
                                    />
                                    Settings
                                </NavItem>
                            )}
                        </StyledNavLink>
                    </NavContainer>
                </Sidebar>
                <Main>
                    <Outlet />
                    {/* <Orders /> */}
                </Main>
            </Wrapper>
            <Footer />
        </>
    )
}

export default Profile
