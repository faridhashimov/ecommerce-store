import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
    YouTube,
} from '@mui/icons-material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    color: #fff;
`
const Wrapper = styled.div`
    width: 93vw;
    /* max-width: 1210px; */
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FooterTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    ${mobile({flexDirection: 'column'})}

`
const FooterInfo = styled.div`
    flex: 1;
    padding-left: 10px;
    ${mobile({paddingLeft: '0px'})}
`
const Logo = styled.h1`
    line-height: 27px;
    margin-bottom: 20px;
`
const FooterText = styled.p`
    margin: 0px 35px 45px 0px;
    font-size: 14px;
    line-height: 25px;
    color: #777;
    
    ${mobile({margin: '0px 0px 20px 0px'})}
`
const MainInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ${mobile({flexDirection: 'column', marginBottom: '10px'})}
`
const Contact = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    ${mobile({flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center'})}
`
const Title = styled.span`
    font-size: 13px;
    font-weight: 300;
    ${mobile({marginRight: '10px'})}
`
const ContactNumber = styled.a`
    font-size: 20px;
    color: #F27A1A;
    text-decoration: none;
`
const Payment = styled.div`
    height: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    ${mobile({marginBottom: '10px'})}
`
const Methods = styled.img`
    margin-top: 5px;
    ${mobile({marginTop: '10px'})}
`
const FooterLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
const InfoLinks = styled.ul`
    flex: 1;
    margin: 0px 10px;
    list-style: none;
    ${mobile({ margin: '0px'})}
`
const LinkItem = styled.li`
    color: #777;
    font-size: 14px;
    margin: 10px 0px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        color: #F27A1A;
        transition: all 0.2s ease;
    }
    &:first-child {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 20px;
    }
    ${mobile({fontSize: '12px', margin: '5px 0px', '&:first-child': {marginBottom: '10px', fontSize: '14px', fontWeight: '400'}})}
`
const FooterBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    margin-top: 20px;
    border-top: 1.5px solid #444444;
    ${mobile({flexDirection: 'column', marginTop: '10px'})}
`
const BottomLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    ${mobile({ marginLeft: '0px', marginBottom: '15px'})}
`
const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ flexDirection: 'column'})}
`
const Copyright = styled.p`
    font-size: 14px;
    color: #777;
    margin-right: 5px;
    ${mobile({ marginBottom: '10px'})}
`
const Terms = styled.div`
    width: 205px;
    display: flex;
    justify-content: space-between;
`
const TermsLink = styled.a`
    font-size: 14px;
    color: #777;
    border-bottom: 1.4px solid #b5b5b5;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    &:hover {
        transition: all 0.2s ease;
        color: #F27A1A;
    }
    &:last-child::before {
        content: '';
        height: 13px;
        width: 1.4px;
        background-color: #b5b5b5;
        position: absolute;
        left: -10px;
        bottom: 3px;
    }
`
const BottomRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`
const SocialIcons = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #${(props) => props.color};
    transition: all 0.2s ease;
    &:hover {
        color: #F27A1A;
        transition: all 0.2s ease;
    }
`
const Social = styled.p`
    font-size: 14px;
    color: #777;
    margin-right: 20px;
`
const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`

export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <FooterTop>
                    <FooterInfo>
                        <Logo>FRED</Logo>
                        <FooterText>
                            Praesent dapibus, neque id cursus ucibus, tortor
                            neque egestas augue, eu vulputate magna eros eu
                            erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                            quis, accumsan porttitor, facilisis luctus, metus.
                        </FooterText>
                        <MainInfo>
                            <Contact>
                                <Title>Got Question? Call us 24/7</Title>
                                <ContactNumber href="tel:123456789">
                                    +0123 456 789
                                </ContactNumber>
                            </Contact>
                            <Payment>
                                <Title>Payment Method</Title>
                                <Methods src="https://d-themes.com/react/molla/demo-8/images/payments.png" />
                            </Payment>
                        </MainInfo>
                    </FooterInfo>
                    <FooterLinks>
                        <InfoLinks>
                            <LinkItem>Information</LinkItem>
                            <LinkItem><StyledLink to='/about'>About FRED</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/about'>How to shop on Molla</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/faq'>FAQ</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/contact'>Contact us</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/login'>Log in</StyledLink></LinkItem>
                        </InfoLinks>
                        <InfoLinks>
                            <LinkItem>Customer Service</LinkItem>
                            <LinkItem>Payment Methods</LinkItem>
                            <LinkItem>Money-back guarantee!</LinkItem>
                            <LinkItem>Returns</LinkItem>
                            <LinkItem><StyledLink to='/faq'>Shipping</StyledLink></LinkItem>
                            <LinkItem>Terms and conditions</LinkItem>
                            <LinkItem>Privacy Policy</LinkItem>
                        </InfoLinks>
                        <InfoLinks>
                            <LinkItem>My Account</LinkItem>
                            <LinkItem><StyledLink to='/profile/userinfo'>Account</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/cart'>View Cart</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/wishlist'>My Wishlist</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/profile/orders'>Track My Order</StyledLink></LinkItem>
                            <LinkItem><StyledLink to='/faq'>Help</StyledLink></LinkItem>
                        </InfoLinks>
                    </FooterLinks>
                </FooterTop>
                <FooterBottom>
                    <BottomLeft>
                        <CopyrightContainer>
                            <Copyright>
                                Copyright © 2022 Molla Store. All Rights
                                Reserved.
                            </Copyright>
                            <Terms>
                                <TermsLink>Terms Of Use</TermsLink>
                                <TermsLink>Privacy Policy</TermsLink>
                            </Terms>
                        </CopyrightContainer>
                    </BottomLeft>
                    <BottomRight>
                        <Social>Social Media</Social>
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
                            <SocialIconContainer color="FF0000">
                                <YouTube style={{ fontSize: 17 }} />
                            </SocialIconContainer>
                            <SocialIconContainer color="E60023">
                                <Pinterest style={{ fontSize: 17 }} />
                            </SocialIconContainer>
                        </SocialIcons>
                    </BottomRight>
                </FooterBottom>
            </Wrapper>
        </Container>
    )
}