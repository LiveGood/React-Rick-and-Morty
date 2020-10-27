import styled, { createGlobalStyle, css } from 'styled-components'
import resetCSS from 'styled-reset'
import { breakpoints } from './constants'
import { setConfiguration } from 'react-grid-system'
import { Link } from 'react-router-dom'

setConfiguration({
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
  gutterWidth: 20,
})

// Reusable styles
export const NavbarLogo = styled(Link)`
  display: flex;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  margin: 0 auto;
  align-items: center;
	justify-content: space-between;
  
  svg {
    fill: ${({ theme }) => theme.colors.light};
    width: 100%;
    height: 100%;
  }
`;

export const FilterLabel = styled.label`
  margin-bottom: 8px;
  padding: 0 5px;
  color: ${({ theme })=> theme.colors.text};
  text-transform: uppercase;
  font-size: 12px;
  display: block;
`;

export const HeaderSidebarMainStyles = css`
  position: fixed;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: 0 0 17px rgba(0,0,0,0.5);
  z-index: 2;
`;

export const FilterInput = css`
  overflow: hidden;
  border-style: solid;
  display: block;
  width: 100%;
  font-size: 16px;
  background: ${({ theme })=> theme.colors.field.background};
  color: ${({ theme })=> theme.colors.field.color};
  border: 1px solid ${({ theme })=> theme.colors.field.borderColor};
  height: 45px;
  padding: 0 15px;
  border-radius: 3px;
  -webkit-appearance: none;

  &:focus,
  &:active  {
    outline: none;
  }
`;

export const FlexCenter = css`
  display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
`;

export default createGlobalStyle`
  ${resetCSS}

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.default};
    background: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.bodyGutter.mobile}px;

    ${({ theme }) => css`
      @media ${theme.mediaQueries.xsOnly} {
        padding-top: ${theme.mobileMenuHeight + theme.bodyGutter.mobile + 10}px;
      }

      @media ${theme.mediaQueries.smUp} {
        padding: ${theme.bodyGutter.desktop}px;
        padding-left: ${theme.bodyGutter.desktop + theme.sidebarWidth + 10}px;
      }
    `}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  strong {
    font-weight: 600;
  }

`
