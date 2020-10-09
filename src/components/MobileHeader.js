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
	padding: 0 ${({ theme }) => theme.bodyGutter.mobile}px;
`;

Header.Toggle = styled.div`
  position: relative;
  z-index: 4;
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: transform 0.25s ease-in-out, color ${({ theme }) => theme.transition.default};
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 8px;
  }

  span:nth-child(4) {
    top: 16px;
  }

  ${({ isOpen }) => isOpen && css`
    span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  `}
`;

export default ({ navItems })  => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <Header>
      <NavbarLogo size={40} to='/'>
            <LogoSVG />
      </NavbarLogo>
      <Header.Toggle {...{isOpen}} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Header.Toggle>
    </Header>
  )
}