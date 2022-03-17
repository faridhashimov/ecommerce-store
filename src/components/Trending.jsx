import { ArrowRightAltOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    height: 470px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: left;
`;
const InfoContainer = styled.div`
    width: 370px;
    text-align: center;
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
`;
const InfoTrending = styled.h4`
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
`;
const InfoTitle = styled.h3`
    font-size: 50px;
    font-weight: 700;
    line-height: 1.1em;
    text-transform: uppercase;
    margin-top: 20px;
`;
const Info = styled.p`
    font-size: 13px;
    font-weight: 300;
    margin-top: 10px;
`;
const InfoButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    border: 2px solid #fff;
    padding: 10px 24px;
    cursor: pointer;
    margin-top: 30px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #fff;
        color: #232323;
        transition: all 0.3s ease-in-out;
    }
`;

const Trending = () => {
    return (
        <Container>
            <Image src="https://d-themes.com/react/molla/demo-8/images/home/banners/banner-4.jpg" />
            <InfoContainer>
                <InfoTrending>Trending</InfoTrending>
                <InfoTitle>New League</InfoTitle>
                <Info>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.
                </Info>
                <InfoButton>
                    Shop Now{' '}
                    <ArrowRightAltOutlined
                        style={{
                            marginLeft: 12,
                            fontSize: 15,
                            fontWeight: 300,
                        }}
                    />
                </InfoButton>
            </InfoContainer>
        </Container>
    );
};

export default Trending;
