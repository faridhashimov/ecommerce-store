import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
`
const ErrorMsg = () => {
    return <Container>Something went wrong...</Container>
}

export default ErrorMsg
