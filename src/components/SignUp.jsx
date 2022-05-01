import { ArrowForward, Facebook, Google } from '@mui/icons-material'
import styled from 'styled-components'
import { useRef, useEffect } from 'react'
import { mobile } from '../responsive'

const LoginPageContainer = styled.div`
    width: 80%;
    ${mobile({width: '90%'})}
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
    ${mobile({padding: '5px 0px'})}
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
    ${mobile({padding: '5px', width: '40%', marginRight: '15px'})}
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
    ${mobile({fontSize: '12px'})}
`
const SignInWith = styled.span`
    display: block;
    text-align: center;
    margin: 25px 0px;
    ${mobile({margin: '10px 0px'})}
`
const SocialButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SignSocialContainer = styled.button`
    width: 48%;
    background-color: transparent;
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
    ${mobile({padding: ' 10px 25px'})}
`

const PasswordsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})};
`

const SignUp = () => {
    const emailRef = useRef()

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    return (
        <LoginPageContainer>
            <InputContainer>
                <Label>Your email address *</Label>
                <Input
                    ref={emailRef}
                    type="email"
                    required
                    autoComplete="off"
                />
            </InputContainer>
            <PasswordsContainer>
                <InputContainer>
                    <Label>Password *</Label>
                    <Input type="password" required />
                </InputContainer>
                <InputContainer>
                    <Label>Re-type Password *</Label>
                    <Input type="password" required />
                </InputContainer>
            </PasswordsContainer>
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
            <SignInWith>or sign up with</SignInWith>
            <SocialButtons>
                <SignSocialContainer>
                    <Google style={{ color: '#CC3333', marginRight: 10 }} />{' '}
                    Google
                </SignSocialContainer>
                <SignSocialContainer>
                    <Facebook style={{ color: '#3366CC', marginRight: 10 }} />{' '}
                    Facebook
                </SignSocialContainer>
            </SocialButtons>
        </LoginPageContainer>
    )
}

export default SignUp
