import { Navbar, Footer } from '../components';
import styled from 'styled-components';
import {
    ArrowRightAltOutlined,
    Facebook,
    Instagram,
    Twitter,
} from '@mui/icons-material';

const Container = styled.div``;
const Wrapper = styled.div`
    width: 93vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Main = styled.div`
    margin: 40px 0px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MainImage = styled.img``;
const MainTitle = styled.div`
    position: absolute;
    text-align: center;
    color: #fff;
`;
const TitleInfo = styled.h1`
    font-size: 40px;
    font-weight: 400;
    line-height: 45px;
`;
const SecTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
`;

const Mission = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;
const MissionContainer = styled.div`
    flex: 1;
    padding: 0px 10px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 10px;
`;
const Info = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
    line-height: 26px;
    color: #777;
`;
const AboutContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: #f9f9f9;
    padding-bottom: 50px;
    margin-bottom: 60px;
`;
const MainInfo = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #eea287;
    margin-bottom: 40px;
`;

const AboutWrapper = styled.div`
    width: 93vw;
    padding-top: 50px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
const AboutLeft = styled.div`
    flex: 1;
    height: 100%;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
const AboutInfoContainer = styled.div`
    width: 85%;
    height: 100%;
`;
const AboutRight = styled.div`
    flex: 1;
    padding: 0px 10px;
`;
const ImageContainer = styled.div`
    position: relative;
`;
const ImageLeftContainer = styled.div`
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 2;
    padding: 20px;
    background-color: #f9f9f9;
`;
const ImageLeft = styled.img``;
const ImageRight = styled.img`
    position: absolute;
    right: 0;
    top: 0;
`;
const CategoryButton = styled.h2`
    display: flex;
    width: 150px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #eea287;
    border: 1.2px solid #eea287;
    min-width: 120px;
    text-transform: uppercase;
    padding: 6px 10px;
    margin-top: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: transparent;
    &:hover {
        background-color: #eea287;
        color: #fff;
    }
`;

const Team = styled.div`
    width: 93vw;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
`;
const MembersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;
const MemberHoverInfo = styled.div`
    position: absolute;
    width: 65%;
    color: #fff;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.3s ease-in-out;
`;
const MemberPhotoContainer = styled.div`
    background-color: red;
    height: 500px;
    margin-bottom: 22px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: all 0.3s ease-in;
    }
`;
const MemberName = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => (props.color === '#FFF' ? '#fff' : '#232323')};
`;

const MemberPosition = styled.div`
    font-weight: 300;
    font-size: 14px;
    color: ${(props) => (props.color === '#FFF' ? '#fff' : '#999')};
`;
const AboutMember = styled.p`
    font-weight: 300;
    line-height: 26px;
    font-size: 14px;
    margin: 15px 0px 25px;
`;
const SocialIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Member = styled.div`
    padding-bottom: 30px;
    &:nth-child(2) {
        margin: 0px 20px;
    }
    &:hover ${MemberHoverInfo} {
        transform: translateY(0px);
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }
    &:hover ${MemberPhotoContainer}:before {
        opacity: 1;
        transition: all 0.3s ease-in;
    }
`;

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const MemberInfo = styled.div`
    text-align: center;
    color: #fff;
`;

const SocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: #eea287;
    }
`;

const About = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Main>
                    <MainImage src="https://d-themes.com/react/molla/demo-8/images/about-header-bg.jpg" />
                    <MainTitle>
                        <TitleInfo>About us</TitleInfo>
                        <SecTitle>Who we are</SecTitle>
                    </MainTitle>
                </Main>
                <Mission>
                    <MissionContainer>
                        <Title>Our Vision</Title>
                        <Info>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Phasellus hendrerit. Pellentesque aliquet nibh
                            nec urna. In nisi neque, aliquet vel, dapibus id,
                            mattis vel, nisi. Sed pretium, ligula sollicitudin
                            laoreet viverra, tortor libero sodales leo, eget
                            blandit nunc tortor eu nibh.
                        </Info>
                    </MissionContainer>
                    <MissionContainer>
                        <Title>Our Mission</Title>
                        <Info>
                            Sed egestas, ante et vulputate volutpat, eros pede
                            semper est, vitae luctus metus libero eu augue.
                            Morbi purus libero, faucibus adipiscing, commodo
                            quis, gravida id, est. Sed lectus. Praesent
                            elementum hendrerit tortor. Sed semper lorem at
                            felis.
                        </Info>
                    </MissionContainer>
                </Mission>
            </Wrapper>
            <AboutContainer>
                <AboutWrapper>
                    <AboutLeft>
                        <AboutInfoContainer>
                            <Title>Who We Are</Title>
                            <MainInfo>
                                Pellentesque odio nisi, euismod pharetra a
                                ultricies in diam. Sed arcu. Cras consequat
                            </MainInfo>
                            <Info>
                                Sed pretium, ligula sollicitudin laoreet
                                viverra, tortor libero sodales leo, eget blandit
                                nunc tortor eu nibh. Suspendisse potenti. Sed
                                egestas, ante et vulputate volutpat, uctus metus
                                libero eu augue.
                            </Info>
                            <CategoryButton>
                                View Our NEws
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </CategoryButton>
                        </AboutInfoContainer>
                    </AboutLeft>
                    <AboutRight>
                        <ImageContainer>
                            <ImageLeftContainer>
                                <ImageLeft src="https://d-themes.com/react/molla/demo-8/images/about/img-1.jpg" />
                            </ImageLeftContainer>
                            <ImageRight src="https://d-themes.com/react/molla/demo-8/images/about/img-2.jpg" />
                        </ImageContainer>
                    </AboutRight>
                </AboutWrapper>
            </AboutContainer>
            <Team>
                <Title>Meet Our Team</Title>
                <MembersContainer>
                    <Member>
                        <MemberPhotoContainer>
                            <Photo src="https://d-themes.com/react/molla/demo-8/images/team/member-1.jpg" />
                            <MemberHoverInfo>
                                <MemberName color="#FFF">
                                    Samanta Grey
                                </MemberName>
                                <MemberPosition color="#FFF">
                                    Founder & CEO
                                </MemberPosition>
                                <AboutMember>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eos eum asperiores
                                    temporibus?
                                </AboutMember>
                                <SocialIcons>
                                    <SocialIconContainer color="3B5999">
                                        <Facebook style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                    <SocialIconContainer color="00acee">
                                        <Twitter style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                    <SocialIconContainer color="E4405F">
                                        <Instagram style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                </SocialIcons>
                            </MemberHoverInfo>
                        </MemberPhotoContainer>
                        <MemberInfo>
                            <MemberName>Samanta Grey</MemberName>
                            <MemberPosition>Founder & CEO</MemberPosition>
                        </MemberInfo>
                    </Member>
                    <Member>
                        <MemberPhotoContainer>
                            <Photo src="https://d-themes.com/react/molla/demo-8/images/team/member-2.jpg" />
                            <MemberHoverInfo>
                                <MemberName color="#FFF">
                                    Samanta Grey
                                </MemberName>
                                <MemberPosition color="#FFF">
                                    Founder & CEO
                                </MemberPosition>
                                <AboutMember>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eos eum asperiores
                                    temporibus?
                                </AboutMember>
                                <SocialIcons>
                                    <SocialIconContainer color="3B5999">
                                        <Facebook style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                    <SocialIconContainer color="00acee">
                                        <Twitter style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                    <SocialIconContainer color="E4405F">
                                        <Instagram style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                </SocialIcons>
                            </MemberHoverInfo>
                        </MemberPhotoContainer>
                        <MemberInfo>
                            <MemberName>Bruce Sutton</MemberName>
                            <MemberPosition>
                                Sales & Marketing Manager
                            </MemberPosition>
                        </MemberInfo>
                    </Member>
                    <Member>
                        <MemberPhotoContainer>
                            <Photo src="https://d-themes.com/react/molla/demo-8/images/team/member-3.jpg" />
                            <MemberHoverInfo>
                                <MemberName color="#FFF">
                                    Samanta Grey
                                </MemberName>
                                <MemberPosition color="#FFF">
                                    Founder & CEO
                                </MemberPosition>
                                <AboutMember>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eos eum asperiores
                                    temporibus?
                                </AboutMember>
                                <SocialIcons>
                                    <SocialIconContainer color="3B5999">
                                        <Facebook style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                    <SocialIconContainer color="00acee">
                                        <Twitter style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                    <SocialIconContainer color="E4405F">
                                        <Instagram style={{ fontSize: 17 }} />
                                    </SocialIconContainer>
                                </SocialIcons>
                            </MemberHoverInfo>
                        </MemberPhotoContainer>
                        <MemberInfo>
                            <MemberName>Janet Joy</MemberName>
                            <MemberPosition>Product Manager</MemberPosition>
                        </MemberInfo>
                    </Member>
                </MembersContainer>
            </Team>
            <Footer />
        </Container>
    );
};

export default About;
