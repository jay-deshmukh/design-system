import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { typeScale } from '../utils';
import { Illustartions, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';


const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.h3};
  margin-bottom: 1px;
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;


export const SignUpModal = ({showModal, setShowModal}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'transformY(0)' : 'transformY(-200%)',
    config: config.molasses
  });
  return(
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustartions.SignUp} alt="sign up image" aria-hidden />
        <SignUpHeader>Sign up</SignUpHeader>
        <SignUpText>Sign up today to get access</SignUpText>
        <PrimaryButton>Sign Up!</PrimaryButton>
        <CloseModalButton aria-label="Close modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
};