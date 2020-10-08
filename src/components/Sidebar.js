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
  width: 50px;
  height: 50px;
  margin: 0 auto;
  
  svg {
    fill: ${({ theme }) => theme.colors.logoBg};
    width: 100%;
    height: 100%;
  }
`

export default () => {
  return (
    <Sidebar>
      <Sidebar.TopContainer>
        <Sidebar.Logo to='/'>
            <LogoSVG />
        </Sidebar.Logo>
      </Sidebar.TopContainer>
    </Sidebar>
  )
}

