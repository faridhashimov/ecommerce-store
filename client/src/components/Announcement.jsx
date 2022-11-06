import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
   height: 30px;
   background-color: #F27A1A;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const Announcement = () => {
    return (
        <Container>
           <Title>SPRING CLEAN YOUR WARDROBE - 25% OFF!*</Title>
        </Container>
    );
};

export default Announcement;
