import { ArrowForward, Facebook, Google } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loginCall } from '../redux/apiCalls'
import { mobile } from '../responsive'

const LoginPageContainer = styled.form`
    width: 100%;
    ${mobile({width: '90%'})}
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
    background-color: #f4f4f4;
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
    padding: 5px 0px 10px;
    margin: 40.9px 0px;
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
    margin: 15px 0px;
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
    ${mobile({padding: ' 10px 25px'})}
`

const SignIn = () => {
    const [inputs, setInputs] = useState(null)
    const emailRef = useRef()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall(inputs, dispatch)
    }

    return (
        <LoginPageContainer onSubmit={handleSubmit}>
            <InputContainer>
                <Label htmlFor="email">Email address *</Label>
                <Input
                    ref={emailRef}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                    type="email"
                />
            </InputContainer>
            <InputContainer>
                <Label>Password *</Label>
                <Input
                    name="password"
                    onChange={handleChange}
                    required
                    type="password"
                    minLength={6}
                />
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

export default SignIn
