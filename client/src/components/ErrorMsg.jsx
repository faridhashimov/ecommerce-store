import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
`
const ErrorMsg = ({ error }) => {
    return <Container>Something went wrong: {error}...</Container>
}

export default ErrorMsg
