import styled from 'styled-components'; 
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helper};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: ({props}) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  error: ({props}) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
    border: 2px solid ${props.theme.status.errorColor};

    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
    }
  `,
  success: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
    border: 2px solid ${props.theme.status.successColor};

    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
    }
  `

}

const Button = styled.button`
  padding: 12px 25px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: B612 Mono;
  transition: background-color 0.2 linear, color: 0.2s linear;  

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover}; 
    color: ${(props) => props.theme.textColorOnPrimary}
  }

  &:focus {
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }

`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  
  &:disabled {
    color: white;
    background-color: ${(props) => props.theme.disabledColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  
  &:disabled {
    border: 2px solid ${(props) => props.theme.disabledColor};
    color: ${(props) => props.theme.disabledColor};

    &:hover {
      background: none;
    }
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  border: none;
  background: none;

  &:disabled {
    color: ${(props) => props.theme.disabledColor};

    &:hover {
      background: none;
    }
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;