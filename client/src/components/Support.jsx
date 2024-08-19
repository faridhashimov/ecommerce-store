import { RocketLaunch, RotateLeft, SupportSharp } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;
const SupportContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93vw;
  padding: 0px 0px 40px;
  ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`;
const InfoTitle = styled.h1`
  font-weight: 600;
  font-size: 16px;
  color: #333;
  line-height: 18px;
  margin: 15px 0 3px;
`;
const InfoText = styled.p`
  font-weight: 300;
  font-size: 13px;
  color: #777;
`;

const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f27a1a;
`;

const InfoContainer = styled.div`
  margin: 0px 10px;
  padding: 30px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ebebeb;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #f27a1a;
    border: 2px solid #f27a1a;
  }
  &:hover ${InfoTitle} {
    color: #fff;
  }
  &:hover ${InfoText} {
    color: #fff;
  }
  &:hover ${InfoIcon} {
    color: #fff;
  }
  ${mobile({ padding: '10px', margin: '5px 0px', width: '80%' })}
`;

export const Support = () => {
  return (
    <Container>
      <SupportContainer>
        <InfoContainer>
          <InfoIcon>
            <RocketLaunch style={{ fontSize: 30 }} />
          </InfoIcon>
          <InfoTitle>PAYMENT & DELIVERY</InfoTitle>
          <InfoText>Free shipping for orders over $50</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoIcon>
            <RotateLeft style={{ fontSize: 30 }} />
          </InfoIcon>
          <InfoTitle>RETURN & REFUND</InfoTitle>
          <InfoText>Free 100% money back guarantee</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoIcon>
            <SupportSharp style={{ fontSize: 30 }} />
          </InfoIcon>
          <InfoTitle>QUALITY SUPPORT</InfoTitle>
          <InfoText>Alway online feedback 24/7</InfoText>
        </InfoContainer>
      </SupportContainer>
    </Container>
  );
};
