import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

import { Logo as LogoSVG } from '../assets/svg'

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
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

Sidebar.Logo = styled(Link)`
  display: flex;
  width: 55px;
  height: 55px;
  margin: 0 auto;
  
  svg {
    fill: ${({ theme }) => theme.colors.logoBg};
    width: 100%;
    height: 100%;
  }
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
//   const checkActive = (match, location) => {
//     //some additional logic to verify you are in the home URI
//     console.log(`1`);
//     console.log(match)
//     console.log(`2`);
//     console.log(location)
//     if(!location) return false;
//     const {pathname} = location;
//     console.log(pathname);
//     return pathname === "/";
// }
  
  return (
    <Sidebar>
      <Sidebar.TopContainer>
        <Sidebar.Logo to='/'>
            <LogoSVG />
        </Sidebar.Logo>
        
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

