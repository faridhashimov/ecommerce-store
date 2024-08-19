import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
`;
//======================Modal container
const ModalContainer = styled.div`
  position: relative;
  min-height: 50%;
  width: 35%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;
const ModalTitle = styled.h3`
  color: #f27a1a;
  font-weight: 400;
  margin-bottom: 10px;
`;
const ModalText = styled.h4`
  color: #9f9f9f;
  font-weight: 400;
`;

export const UpdateCartModal = () => {
  return (
    <ModalBackground>
      <ModalContainer>
        <Spinner />
        <ModalTitle>CART IS UPDATING</ModalTitle>
        <ModalText>Please Wait...</ModalText>
      </ModalContainer>
    </ModalBackground>
  );
};
