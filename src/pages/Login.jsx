import { useState } from 'react'
import styled from 'styled-components'
import { Footer, Navbar, SignIn, SignUp } from '../components'

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

const Login = () => {
    
    const [active, setactive] = useState('signin')

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
                            button={active}
                            onClick={(e) => {
                                toggle('signin')
                            }}
                        >
                            Sing in
                        </SigninButton>
                        <SigninButton
                            button={active}
                            onClick={(e) => toggle('register')}
                        >
                            Register
                        </SigninButton>
                    </ButtonContainer>
                    {active === 'signin' ? <SignIn /> : <SignUp />}
                </LoginContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Login
