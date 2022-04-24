import { Link, Outlet } from 'react-router-dom'
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

const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <LoginContainer>
                    <ButtonContainer>
                        <Link to="/login">Sing in</Link>
                        <Link to="/register">Register</Link>
                    </ButtonContainer>
                    <Outlet />
                </LoginContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Layout
