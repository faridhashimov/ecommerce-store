import { Forum, Logout, Person, ViewInAr } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { logOut } from '../redux/userSlice'

const PopupContainer = styled.div`
    width: 140px;
    /* height: 200px; */
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: ${(props) => (props.state ? 'block' : 'none')};
    position: absolute;
    bottom: -165px;
    right: -40px;
    transition: all 0.3s ease-in;
    z-index: 1000;
    padding: 10px;
`
const MainPopup = styled.ul`
    list-style: none;
`
const sharedStyle = css`
    font-size: 14px !important;
    padding: 0px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #666 !important;
    margin: 7px 0px;
    cursor: pointer;
    text-transform: none !important;
    &:first-child {
        margin: 0px 0px 7px;
        color: #eea287 !important;
        font-weight: 600;
    }
    &:last-child {
        margin-bottom: 0px;
    }
    &:hover {
        color: #eea287 !important;
    }
`
const MainPopupLink = styled(Link)`
    ${sharedStyle}
`
const PopupIcons = styled(SvgIcon)`
    font-size: 16px !important;
    margin-right: 7px;
`
const LogOutLink = styled.li`
    ${sharedStyle}
`

const NavbarPopup = ({ popup }) => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <PopupContainer state={popup}>
            <MainPopup>
                <MainPopupLink to="/profile">{user.email}</MainPopupLink>
                <MainPopupLink to="/orders">
                    <PopupIcons component={ViewInAr} />
                    Orders
                </MainPopupLink>
                <MainPopupLink to="/profile">
                    <PopupIcons component={Forum} />
                    Messages
                </MainPopupLink>
                <MainPopupLink to="/profile">
                    <PopupIcons component={Person} />
                    User info
                </MainPopupLink>
                <LogOutLink onClick={handleLogOut}>
                    <PopupIcons component={Logout} /> Log out
                </LogOutLink>
            </MainPopup>
        </PopupContainer>
    )
}

export default NavbarPopup
