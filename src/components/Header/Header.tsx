import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaHome, FaCheckCircle, FaClock } from  "react-icons/fa";


const HeaderContainer = styled.header`
 
 display: flex;
  background-color: #407eb0;
  color: white;
  justify-content:center;
  padding: 40px;
  width: 100%;

 
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 16px;
`;

const IconLink = styled(Link)`
  color: #f1efef;
  font-size: 35px;
  transition: color 0.2s ease;

  &:hover {
    color: #ed145b;
  }
`;


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <IconLink to="/" title="Home">
    <FaHome />
  </IconLink>

  <IconLink to="/completed" title="Tarefas Concluídas">
    <FaCheckCircle />
  </IconLink>

  <IconLink to="/pending" title="Tarefas Pendentes">
    <FaClock />
  </IconLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;