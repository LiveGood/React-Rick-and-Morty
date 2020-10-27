import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Logo as LogoSVG } from 'assets/svg';
import { NavbarLogo, HeaderSidebarMainStyles, FlexCenter } from '../GlobalStyle'
import { AnimatedRender } from './'
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch'

const Header = styled.div`
  ${HeaderSidebarMainStyles}
  ${FlexCenter}
	width: 100%;
	height: ${({ theme }) => theme.mobileMenuHeight}px;
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
    background: ${({ theme }) => theme.colors.light};
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

const NavOverlay = styled.div`
  ${FlexCenter}
  position: fixed;
	top: ${({ theme }) => theme.mobileMenuHeight}px;
	left: 0;
	width: 100%;
	height: ${({ theme }) => `calc(100vh - ${theme.mobileMenuHeight}px)`};
	background: ${({ theme }) => theme.colors.primary};
`;

const NavContainer = styled.div`
  width: 100%;
`;

const Nav = styled.ul`
	margin: 20px 0 50px 0;
	padding: 0;
	width: 100%;
`

Nav.Item = styled.li`
  margin: 0;
	padding: 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

	&:first-child {
		border-top: 1px solid ${({ theme }) => theme.colors.divider};
	}

  a {
    ${FlexCenter}
		color: ${({ theme }) => theme.colors.light};
		text-transform: uppercase;
		font-size: 20px;
		text-align: center;
		width: 100%;
		padding: 20px 0;

    &.active {
			background: ${({ theme }) => theme.colors.sidebar.buttonBg};
		}

    svg {
      fill: ${({ theme }) => theme.colors.light};
      width: 20px;
      height: 20px;
      margin-right: 10px;
	  }
  }
`;

export default ({ navItems })  => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Header>
      <ThemeSwitch />
      <NavbarLogo size={40} to='/'>
            <LogoSVG />
      </NavbarLogo>
      <Header.Toggle {...{isOpen}} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Header.Toggle>

      <AnimatedRender in={isOpen}>
        <NavOverlay >
          <NavContainer>
            <Nav>
              {navItems.map(({ to, name, exact, icon: Icon }, index)=> (
                <Nav.Item key={index}>
                  <NavLink {...{ to, exact }} onClick={()=> setIsOpen(false)}>
                    <Icon />
                    {name}
                  </NavLink>
                </Nav.Item>
              ))}
            </Nav>
            <LanguageSwitch />
          </NavContainer>
        </NavOverlay>
      </AnimatedRender>
    </Header>
  )
}