import { ArrowForward, Facebook, Google } from '@mui/icons-material';
import styled from 'styled-components';
import { Footer, Navbar } from '../components';

const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 650px;
    background: url('https://d-themes.com/react/molla/demo-8/images/backgrounds/login-bg.jpg');
    background-size: cover;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled.div`
    width: 45%;
    height: 75%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
`;
const SigninButton = styled.button`
    font-weight: 400;
    flex: 1;
    font-size: 24px;
    line-height: 36px;
    padding: 10px 0px;
    background-color: transparent;
    border: none;
`;
const LoginPageContainer = styled.div`
    width: 80%;
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
    border: 1px solid #ebebeb;
    transition: all 0.2s ease;
    &:focus {
        outline: 1px solid #eea287;
        transition: all 0.2s ease;
    }
`;
const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
	padding: 5px 0px 30px;
`;
const RememberButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RememberButtonTitle = styled.label`
    font-weight: 300;
    font-size: 14px;
    margin-left: 10px;
    color: #666;
`;
const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    text-transform: uppercase;
    color: #eea287;
`;
const Checkbox = styled.input``;
const ForgotPassword = styled.a`
    font-weight: 300;
    font-size: 14px;
    color: #666;
    transition: all 0.2s ease;
    &:hover {
        color: #eea287;
        transition: all 0.2s ease;
    }
`;
const SignIn = styled.span`
    display: block;
    text-align: center;
    margin: 25px 0px;
`;
const SocialButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SignWith = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 25px;
    align-items: center;
    color: #333;
    font-weight: 300;
    font-size: 14px;
`;
// const LoginContainer = styled.div``

const Login = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <LoginContainer>
                    <ButtonContainer>
                        <SigninButton>Sing in</SigninButton>
                        <SigninButton>Register</SigninButton>
                    </ButtonContainer>
                    <LoginPage />
                </LoginContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

const LoginPage = () => {
    return (
        <LoginPageContainer>
            <InputContainer>
                <Label>Username or email address *</Label>
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
                <RememberButtonContainer>
                    <Checkbox type="checkbox" />
                    <RememberButtonTitle>Remember Me</RememberButtonTitle>
                </RememberButtonContainer>
                <ForgotPassword>Forgot Your Password?</ForgotPassword>
            </LoginButtonContainer>
            <SignIn>or sign in with</SignIn>
            <SocialButtons>
                <SignWith>
                    <Google style={{ color: '#CC3333', marginRight: 10 }} />{' '}
                    Login With Google
                </SignWith>
                <SignWith>
                    <Facebook style={{ color: '#3366CC', marginRight: 10 }} />{' '}
                    Login With Facebook
                </SignWith>
            </SocialButtons>
        </LoginPageContainer>
    );
};

export default Login;
