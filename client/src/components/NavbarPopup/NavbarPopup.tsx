import { Forum, Logout, Person, ViewInAr } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import { selectUser } from '../redux/selectors';
import { logOut } from '../redux/userSlice/userSlice';

const PopupContainer = styled.div`
  width: fit-content;
  /* height: 200px; */
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: ${(props) => (props.state ? 'block' : 'none')};
  position: absolute;
  bottom: -150px;
  right: -42px;
  transition: all 0.3s ease-in;
  z-index: 1000;
  padding: 10px;
  opacity: 0.75;
  &:before {
    content: '';
    position: absolute;
    top: -12px;
    left: 60%;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    transform: rotate(45deg);
    z-index: -100;
  }
`;
const MainPopup = styled.ul`
  list-style: none;
`;
const sharedStyle = css`
  font-size: 14px !important;
  padding: 0px !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #666 !important;
  margin: 7px 0px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  text-transform: none !important;
  &:first-child {
    margin: 0px 0px 7px;
    color: #f27a1a !important;
    font-weight: 600;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    color: #f27a1a !important;
  }
`;
const MainPopupLink = styled(Link)`
  ${sharedStyle}
`;
const PopupIcons = styled(SvgIcon)`
  font-size: 16px !important;
  margin-right: 7px;
`;
const LogOutLink = styled.li`
  ${sharedStyle}
`;

export const NavbarPopup: React.FC = ({ popup }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <PopupContainer state={popup}>
      <MainPopup>
        <MainPopupLink to="/profile/orders">{user.email}</MainPopupLink>
        <MainPopupLink to="/profile/orders">
          <PopupIcons component={ViewInAr} />
          Orders
        </MainPopupLink>
        <MainPopupLink to="/profile/messages">
          <PopupIcons component={Forum} />
          Messages
        </MainPopupLink>
        <MainPopupLink to="/profile/userinfo">
          <PopupIcons component={Person} />
          User info
        </MainPopupLink>
        <LogOutLink onClick={handleLogOut}>
          <PopupIcons component={Logout} /> Log out
        </LogOutLink>
      </MainPopup>
    </PopupContainer>
  );
};
