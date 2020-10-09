import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Logo as LogoSVG } from 'assets/svg';
import { NavbarLogo, HeaderSidebarMainStyles } from '../GlobalStyle'

const Header = styled.div`
  ${HeaderSidebarMainStyles}
	width: 100%;
	height: ${({ theme }) => theme.mobileMenuHeight}px;
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