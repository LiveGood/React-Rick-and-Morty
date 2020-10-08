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

export default () => {
  return (
    <Sidebar>
      
    </Sidebar>
  )
}

