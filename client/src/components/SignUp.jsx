import { useRef, useEffect, useState } from 'react';
import {
  ArrowForward,
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { SvgIcon } from '@mui/material';
import { useRegisterUserMutation } from '../redux/ecommerceApi';
import Spinner from './Spinner';
import ErrorMsg from './ErrorMsg';

const REGEXP_PASS = new RegExp(
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
);

const LoginPageContainer = styled.form`
  width: 100%;
  min-height: 250px;
  ${mobile({ width: '90%' })}
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin-bottom: 10px;
  color: #666;
  font-weight: 300;
  font-size: 14px;
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
    border: 1px solid #f27a1a;
    outline: none;
  }
`;
const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px 10px;
  ${mobile({ padding: '5px 0px' })}
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
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled:hover {
    border: 1px solid #777;
    color: #777;
    background-color: transparent;
  }
  &:hover {
    background-color: #f08936;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  ${mobile({ padding: '5px', width: '40%', marginRight: '15px' })}
`;
const PrivacyPolicy = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Checkbox = styled.input`
  transform: scale(1.2);
  border: 1px solid #1e5180;
  cursor: pointer;
`;
const PrivacyPolicyButtonTitle = styled.label`
  font-weight: 300;
  font-size: 14px;
  margin-left: 10px;
  color: #666;
  cursor: pointer;
  ${mobile({ fontSize: '12px' })}
`;
const SignInWith = styled.span`
  display: block;
  text-align: center;
  margin: 15px 0px;
  ${mobile({ margin: '10px 0px' })}
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
const ValidPassword = styled.p`
  color: #d0021b;
  margin-top: 7px;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 7px;
  border-radius: 3px;
  border: 1px solid #d0021b;
  background-color: #fff4f6;
`;
const ValidMatch = styled.span`
  color: #d0021b;
  margin-top: 7px;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 7px;
  border-radius: 3px;
  border: 1px solid #d0021b;
  background-color: #fff4f6;
`;
const Success = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6ce86c;
  h1 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
  }
`;
const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
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
export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [match, setMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [newUser, setNewUSer] = useState(false);

  const [showPwd, setShowPwd] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  const [registerUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password, match]);

  useEffect(() => {
    setValidPassword(REGEXP_PASS.test(password));
    setValidMatch(password === match);
  }, [password, match]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    try {
      const user = await registerUser(body).unwrap();
      setNewUSer(user.username);
    } catch (err) {
      setErrMsg(err);
    }
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isSuccess ? (
        <Success>
          <h1>Welcome {newUser}</h1>
          <p>Please Login to purchase products</p>
        </Success>
      ) : (
        <LoginPageContainer onSubmit={onSubmit}>
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <ErrorMsg error={errMsg} />
          ) : (
            <>
              <InputContainer>
                <Label htmlFor="email">Your email address *</Label>
                <Input
                  ref={emailRef}
                  type="email"
                  id="email"
                  required
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="password">Password *</Label>
                <PasswordContainer>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    id="password"
                    type={showPwd ? 'text' : 'password'}
                    required
                  />
                  <ShowPassWordIconContainer
                    onClick={() => setShowPwd(!showPwd)}
                  >
                    {showPwd ? (
                      <StyledSvg
                        sx={{ color: '#F27A1A' }}
                        component={Visibility}
                      />
                    ) : (
                      <StyledSvg component={VisibilityOff} />
                    )}
                  </ShowPassWordIconContainer>
                </PasswordContainer>
                {passwordFocus && !validPassword ? (
                  <ValidPassword>
                    ! Must contain minimum 8 chrarcters, at least one upper case
                    and one lower case letter, one digit, one special chracter
                  </ValidPassword>
                ) : null}
              </InputContainer>
              <InputContainer>
                <Label htmlFor="match">Re-type Password *</Label>
                <PasswordContainer>
                  <Input
                    onChange={(e) => setMatch(e.target.value)}
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    id="match"
                    type={showMatch ? 'text' : 'password'}
                    required
                  />
                  <ShowPassWordIconContainer
                    onClick={() => setShowMatch(!showMatch)}
                  >
                    {showMatch ? (
                      <StyledSvg
                        sx={{ color: '#F27A1A' }}
                        component={Visibility}
                      />
                    ) : (
                      <StyledSvg component={VisibilityOff} />
                    )}
                  </ShowPassWordIconContainer>
                </PasswordContainer>
                {matchFocus && !validMatch ? (
                  <ValidMatch>! Passwords does not match</ValidMatch>
                ) : null}
              </InputContainer>

              <LoginButtonContainer>
                <LoginButton
                  disabled={
                    !email || !validPassword || !validMatch || !isChecked
                  }
                >
                  Sign Up
                  <ArrowForward style={{ fontSize: 10, marginLeft: 5 }} />
                </LoginButton>
                <PrivacyPolicy>
                  <Checkbox
                    type="checkbox"
                    checked={isChecked}
                    onChange={checkHandler}
                  />
                  <PrivacyPolicyButtonTitle mr="reg">
                    I agree to the privacy policy *
                  </PrivacyPolicyButtonTitle>
                </PrivacyPolicy>
              </LoginButtonContainer>
              <SignInWith>or sign up with</SignInWith>
              <SocialButtons>
                <SignSocialContainer>
                  <Google
                    style={{
                      color: '#CC3333',
                      marginRight: 10,
                    }}
                  />
                  Google
                </SignSocialContainer>
                <SignSocialContainer>
                  <Facebook
                    style={{
                      color: '#3366CC',
                      marginRight: 10,
                    }}
                  />
                  Facebook
                </SignSocialContainer>
              </SocialButtons>
            </>
          )}
        </LoginPageContainer>
      )}
    </>
  );
};
