import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Logo as LogoSVG } from '../assets/svg'
import { NavbarLogo } from '../GlobalStyle'

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.sidebarWidth}px;
  height: 100%;
	background: ${({ theme }) => theme.colors.primary};
  z-index: 2;
	box-shadow: 0 0 17px rgba(0,0,0,0.5);
`;

Sidebar.TopContainer = styled.div`
	position: absolute;
	top: 15px;
	left: 0;
	width: 100%;
`

Sidebar.Logo = styled.div`
  
`

Sidebar.Nav = styled.ul`
  padding: 0;
  margin: 22px 0 0 0;
  list-style: none;
`;

Sidebar.NavItem  = styled.li`
  a {
    color: ${({ theme }) => theme.colors.logoBg};
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
    fill: ${({ theme }) => theme.colors.logoBg};
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

