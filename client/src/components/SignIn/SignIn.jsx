import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowForward,
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { mobile } from '../../responsive';
import { SvgIcon } from '@mui/material';
import { useLoginUserMutation } from '../../redux/ecommerceApi';
import Spinner from '../Spinner/Spinner';
import { userLogin } from '../../redux/userSlice/userSlice';

const LoginPageContainer = styled.form`
  width: 100%;
  ${mobile({ width: '90%' })}
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Label = styled.label`
  margin-bottom: 10px;
  color: #666;
  font-weight: 300;
  font-size: 14px;
`;
const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
`;
const Input = styled.input`
  padding: 7px 20px;
  color: #777;
  background-color: #f4f4f4;
  border: 1px solid #ebebeb;
  &:not(:last-child) {
    width: 90%;
  }
  &:focus {
    border: 1px solid #eea287;
    outline: none;
  }
`;
const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px 10px;
  margin: 40.9px 0px;
  ${mobile({ margin: '33.5px 0px' })}
`;
const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 25px;
  text-transform: uppercase;
  color: #f27a1a;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #f27a1a;
  transition: all 0.3s ease-in-out;
  margin-right: 20px;
  &:hover {
    background-color: #f08936;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  ${mobile({ padding: '7px 15px' })}
`;
const ForgotPassword = styled.a`
  font-weight: 300;
  font-size: 14px;
  color: #666;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #f27a1a;
    transition: all 0.2s ease;
  }
`;
const SignInWith = styled.span`
  display: block;
  text-align: center;
  margin: 15px 0px;
`;
const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SignSocialContainer = styled.button`
  width: 48%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 7px 25px;
  align-items: center;
  color: #333;
  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #ddd;
  &:hover {
    background-color: #f8f9fb;
  }
  ${mobile({ padding: ' 10px 25px' })}
`;
const ErorMsg = styled.p`
  color: red;
`;
const StyledSvg = styled(SvgIcon)`
  transition: all 0.2s ease-in;
`;
const ShowPassWordIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.1px;
  border: 1px solid #ddd;
  cursor: pointer;
  width: 10%;
  &:hover {
    border: 1px solid #f27a1a;
    transition: all 0.2s ease-in;
  }
  &:hover ${StyledSvg} {
    color: #f27a1a;
    transition: all 0.2s ease-in;
  }
`;
export const SignIn = () => {
  const [errMsg, setErrMsg] = useState('');
  const [focus, setFocus] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  // const { user, error } = useSelector((state) => state.user)
  let navigate = useNavigate();

  const [loginUser, { isError, isLoading, error }] = useLoginUserMutation();

  useEffect(() => {
    emailRef.current.focus();
    setErrMsg('');
  }, []);

  useEffect(() => {
    focus && setErrMsg('');
  }, [focus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }).unwrap();
      dispatch(userLogin(user));
      navigate('/', { replace: true });
    } catch (err) {
      setFocus(false);
      setErrMsg(err.data);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <LoginPageContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="email">Email address *</Label>
            <Input
              onFocus={() => setFocus(true)}
              ref={emailRef}
              id="email"
              name="email"
              // onChange={handleChange}
              required
              type="email"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password *</Label>
            <PasswordContainer>
              <Input
                onFocus={() => setFocus(true)}
                ref={passwordRef}
                name="password"
                id="password"
                // onChange={handleChange}
                required
                type={showPwd ? 'text' : 'password'}
                minLength={6}
              />
              <ShowPassWordIconContainer onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? (
                  <StyledSvg sx={{ color: '#F27A1A' }} component={Visibility} />
                ) : (
                  <StyledSvg component={VisibilityOff} />
                )}
              </ShowPassWordIconContainer>
            </PasswordContainer>
          </InputContainer>
          {isError && <ErorMsg>{error.data}</ErorMsg>}
          <LoginButtonContainer>
            <LoginButton>
              Log in
              <ArrowForward style={{ fontSize: 10, marginLeft: 5 }} />
            </LoginButton>
            <ForgotPassword>Forgot Your Password?</ForgotPassword>
          </LoginButtonContainer>
          <SignInWith>or sign in with</SignInWith>
          <SocialButtons>
            <SignSocialContainer>
              <Google style={{ color: '#CC3333', marginRight: 10 }} />
              Google
            </SignSocialContainer>
            <SignSocialContainer>
              <Facebook style={{ color: '#3366CC', marginRight: 10 }} />
              Facebook
            </SignSocialContainer>
          </SocialButtons>
        </LoginPageContainer>
      )}
    </>
  );
};
