import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Logo as LogoSVG } from '../assets/svg'
import { NavbarLogo, HeaderSidebarMainStyles } from '../GlobalStyle'

const Sidebar = styled.div`
  ${HeaderSidebarMainStyles}
  width: ${({ theme }) => theme.sidebarWidth}px;
  height: 100%;
`;

Sidebar.TopContainer = styled.div`
	position: absolute;
	top: 15px;
	left: 0;
	width: 100%;
`;

Sidebar.Nav = styled.ul`
  padding: 0;
  margin: 22px 0 0 0;
  list-style: none;
`;

Sidebar.NavItem  = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
		font-size: 11px;
		text-align: center;
		display: block;
		width: 100%;
		padding: 15px 0;
    text-decoration: none;
    
    &.active {
      background: ${({ theme }) => theme.colors.sidebar.buttonBg};
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 26px;
    height: 26px;
    display: block;
		margin: 0 auto 8px auto;
  }
`;

export default ({ navItems }) => {
  return (
    <Sidebar>
      <Sidebar.TopContainer>
        <NavbarLogo size={55} to='/'>
            <LogoSVG />
        </NavbarLogo>
        
        <Sidebar.Nav>
          {navItems.map(({ to, name, exact, icon: Icon }) => (
            <Sidebar.NavItem key={`sidebar-nav-item-${name}`}>
            <NavLink  to={to} exact={exact}>

              <Icon />
              {name}
            </NavLink>
          </Sidebar.NavItem>
          ))}
        </Sidebar.Nav>
      </Sidebar.TopContainer>
    </Sidebar>
  )
}

