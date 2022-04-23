import { ArrowForward, Facebook, Google } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import { Footer, Navbar } from '../components'

const Container = styled.div`
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    height: 650px;
    background: url('https://d-themes.com/react/molla/demo-8/images/backgrounds/login-bg.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled.div`
    width: 45%;
    height: 75%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
`
const SigninButton = styled.button`
    font-weight: 400;
    flex: 1;
    font-size: 24px;
    line-height: 36px;
    padding: 10px 0px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
const LoginPageContainer = styled.div`
    width: 80%;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
const Label = styled.label`
    margin-bottom: 10px;
    color: #666;
    font-weight: 300;
    font-size: 14px;
`
const Input = styled.input`
    padding: 7px 20px;
    color: #777;
    border: 1px solid #ebebeb;
    transition: all 0.2s ease;
    &:focus {
        outline: 1px solid #eea287;
        transition: all 0.2s ease;
    }
`
const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0px 30px;
`

const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 25px;
    text-transform: uppercase;
    color: #eea287;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #eea287;
    transition: all 0.3s ease-in-out;
    margin-right: 20px;
    &:hover {
        background-color: #eea287;
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
`
const PrivacyPolicy = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Checkbox = styled.input`
    transform: scale(1.2);
    border: 1px solid #1e5180;
    cursor: pointer;
`
const PrivacyPolicyButtonTitle = styled.label`
    font-weight: 300;
    font-size: 14px;
    margin-left: 10px;
    color: #666;
    cursor: pointer;
`
const ForgotPassword = styled.a`
    font-weight: 300;
    font-size: 14px;
    color: #666;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        color: #eea287;
        transition: all 0.2s ease;
    }
`
const SignInWith = styled.span`
    display: block;
    text-align: center;
    margin: 25px 0px;
`
const SocialButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SignSocialContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 25px;
    align-items: center;
    color: #333;
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #ddd;
    &:hover {
        background-color: #f8f9fb;
    }
`
// const LoginContainer = styled.div``

const Login = () => {
    const [active, setactive] = useState('singin')

    const toggle = (state) => {
        setactive(state)
    }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <LoginContainer>
                    <ButtonContainer>
                        <SigninButton
                            onClick={(e) => {
                                toggle('signin')
                            }}
                        >
                            Sing in
                        </SigninButton>
                        <SigninButton onClick={(e) => toggle('register')}>
                            Register
                        </SigninButton>
                    </ButtonContainer>
                    {active === 'signin' ? (
                        <LoginComponent />
                    ) : (
                        <RegisterComponent />
                    )}
                    {/* <LoginComponent /> */}
                    {/* <RegisterComponent /> */}
                </LoginContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const LoginComponent = () => {
    return (
        <LoginPageContainer>
            <InputContainer>
                <Label>Email address *</Label>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <Label>Password *</Label>
                <Input type="text" />
            </InputContainer>
            <LoginButtonContainer>
                <LoginButton>
                    Log in{' '}
                    <ArrowForward style={{ fontSize: 10, marginLeft: 5 }} />
                </LoginButton>
                <ForgotPassword>Forgot Your Password?</ForgotPassword>
            </LoginButtonContainer>
            <SignInWith>or sign in with</SignInWith>
            <SocialButtons>
                <SignSocialContainer>
                    <Google style={{ color: '#CC3333', marginRight: 10 }} />{' '}
                    Login With Google
                </SignSocialContainer>
                <SignSocialContainer>
                    <Facebook style={{ color: '#3366CC', marginRight: 10 }} />{' '}
                    Login With Facebook
                </SignSocialContainer>
            </SocialButtons>
        </LoginPageContainer>
    )
}
const RegisterComponent = () => {
    return (
        <LoginPageContainer>
            <InputContainer>
                <Label>Your email address *</Label>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <Label>Password *</Label>
                <Input type="text" />
            </InputContainer>
            <LoginButtonContainer>
                <LoginButton>
                    Sign Up{' '}
                    <ArrowForward style={{ fontSize: 10, marginLeft: 5 }} />
                </LoginButton>
                <PrivacyPolicy>
                    <Checkbox type="checkbox" />
                    <PrivacyPolicyButtonTitle mr="reg">
                        I agree to the privacy policy *
                    </PrivacyPolicyButtonTitle>
                </PrivacyPolicy>
            </LoginButtonContainer>
            <SignInWith>or sign in with</SignInWith>
            <SocialButtons>
                <SignSocialContainer>
                    <Google style={{ color: '#CC3333', marginRight: 10 }} />{' '}
                    Login With Google
                </SignSocialContainer>
                <SignSocialContainer>
                    <Facebook style={{ color: '#3366CC', marginRight: 10 }} />{' '}
                    Login With Facebook
                </SignSocialContainer>
            </SocialButtons>
        </LoginPageContainer>
    )
}

export default Login
