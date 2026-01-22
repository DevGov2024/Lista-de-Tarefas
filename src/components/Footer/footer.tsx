import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
   background-color: #407eb0;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Direitos autorais Gabriel Moura  2026</p>
    </FooterContainer>
  );
};

export default Footer;