import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Logo as LogoSVG } from 'assets/svg';
import { NavbarLogo } from '../GlobalStyle'

const Header = styled.div`
  position: fixed;
	top: 0;
	left: 0;
	height: ${({ theme }) => theme.mobileMenuHeight}px;
	background: ${({ theme }) => theme.colors.primary};
	width: 100%;

  display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-between;
`;

export default ({ navItems })  => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <NavbarLogo size={40} to='/'>
            <LogoSVG />
        </NavbarLogo>
    </Header>
  )
}