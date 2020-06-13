import React from 'react';
import styled from 'styled-components';


const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;


export const CloseIcon = () => <CloseIconWrapper>
  <path d="M13.4142 12L20.4853 19.0711L19.0711 20.4853L12 13.4142L4.92892 20.4853L3.51471 19.0711L10.5858 12L3.51471 4.92894L4.92892 3.51472L12 10.5858L19.0711 3.51472L20.4853 4.92894L13.4142 12Z" fill="black" />
</CloseIconWrapper>;
