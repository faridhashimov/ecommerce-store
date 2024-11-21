import { useState } from 'react';
import styled from 'styled-components';
import { Footer, Navbar } from '../components';
import { ordersInfo, payments, shippingInfo } from '../data';
import { v4 as uuidv4 } from 'uuid';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 93vw;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TopTitle = styled.h2`
  position: absolute;
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  color: #232323;
  span {
    font-weight: 400;
    font-size: 20px;
    color: #f27a1a;
  }
`;
const QuestionsContainer = styled.div`
  width: 100%;
`;
const Questions = styled.div`
  width: 100%;
`;
const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 30px;
  &:not(:nth-child(1)) {
    margin-top: 30px;
  }
  ${mobile({
    marginBottom: '10px',
    '&:not(:nth-child(1))': { marginTop: '10px' },
  })}
`;
const QuestionContainer = styled.div``;
const Question = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  background-color: #fafafa;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  transition: all 0.2s ease;
  &:hover {
    color: #eea287;
    transition: all 0.2s ease;
  }
  &:last-child {
    border-bottom: 1px solid #ccc;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
`;
const Answer = styled.span`
  font-weight: 300;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: #fafafa;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  &:last-child {
    border-bottom: 1px solid #ccc;
  }
  /* border: 1px solid #ccc; */
`;
const CategoryContainer = styled.div``;
export const Faq = () => {
  const [active, setActive] = useState(false);

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <Container>
      <Navbar />
      <TopContainer>
        <Image src="https://d-themes.com/react/molla/demo-8/images/page-header-bg.jpg" />
        <TopTitle>
          F.A.Q <br /> <span>Pages</span>
        </TopTitle>
      </TopContainer>
      <Wrapper>
        <QuestionsContainer>
          <Questions>
            <Title>Shipping Information</Title>
            <QuestionContainer>
              {shippingInfo.map((item) => {
                return (
                  <CategoryContainer key={uuidv4()}>
                    <Question onClick={() => toggle(item.question)}>
                      {item.question}
                    </Question>
                    {active === item.question ? (
                      <Answer>{item.answer}</Answer>
                    ) : null}
                  </CategoryContainer>
                );
              })}
            </QuestionContainer>
            <Title>Orders and Returns</Title>
            <QuestionContainer>
              {ordersInfo.map((item) => {
                return (
                  <CategoryContainer key={uuidv4()}>
                    <Question onClick={() => toggle(item.question)}>
                      {item.question}
                    </Question>
                    {active === item.question ? (
                      <Answer>{item.answer}</Answer>
                    ) : null}
                  </CategoryContainer>
                );
              })}
            </QuestionContainer>
            <Title>Payments</Title>
            <QuestionContainer>
              {payments.map((item) => {
                return (
                  <CategoryContainer key={uuidv4()}>
                    <Question onClick={() => toggle(item.question)}>
                      {item.question}
                    </Question>
                    {active === item.question ? (
                      <Answer>{item.answer}</Answer>
                    ) : null}
                  </CategoryContainer>
                );
              })}
            </QuestionContainer>
          </Questions>
        </QuestionsContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
