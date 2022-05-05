import { Forum, Logout, Person, ViewInAr } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loginSuccess } from '../redux/userSlice'

const PopupContainer = styled.div`
    width: 140px;
    /* height: 200px; */
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: ${(props) => (props.state ? 'block' : 'none')};
    position: absolute;
    bottom: -172px;
    right: -40px;
    transition: all 0.3s ease-in;
    z-index: 1000;
    padding: 10px;
`
const MainPopup = styled.ul`
    list-style: none;
`
const MainPopupLink = styled.li`
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #666;
    margin: 7px 0px;
    cursor: pointer;
    &:first-child {
        margin: 0px 0px 7px;
        color: #eea287;
        font-weight: 600;
    }
    &:hover {
        color: #eea287;
    }
`
const PopupIcons = styled(SvgIcon)`
    font-size: 16px !important;
    margin-right: 7px;
`
const NavbarPopup = ({popup}) => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(loginSuccess(null))
    }
    return (
        <PopupContainer state={popup}>
            <MainPopup>
                <MainPopupLink>{user.email}</MainPopupLink>
                <MainPopupLink>
                    <PopupIcons component={ViewInAr} /> Orders
                </MainPopupLink>
                <MainPopupLink>
                    <PopupIcons component={Forum} />
                    Messages
                </MainPopupLink>
                <MainPopupLink>
                    <PopupIcons component={Person} />
                    User info
                </MainPopupLink>
                <MainPopupLink onClick={handleLogOut}>
                    <PopupIcons component={Logout} /> Log out
                </MainPopupLink>
            </MainPopup>
        </PopupContainer>
    )
}

export default NavbarPopup
