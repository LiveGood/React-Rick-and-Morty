import styled, { createGlobalStyle, css } from 'styled-components'
import resetCSS from 'styled-reset'
import { breakpoints } from './constants'
import { setConfiguration } from 'react-grid-system'
import { Link } from 'react-router-dom'

//Set grid custom breakpoints
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
    fill: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
  }
`;

export const HeaderSidebarMainStyles = css`
  position: fixed;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: 0 0 17px rgba(0,0,0,0.5);
  z-index: 2;
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

  @-webkit-keyframes rotate {
      100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes rotate {
      100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }

    @-webkit-keyframes strokeColor {
      100%,
      0% {
        stroke: #01b9df;
      }
      40% {
        stroke: #fff;
      }
      66% {
        stroke: #01b9df;
      }
      80%,
      90% {
        stroke: #fff;
      }
    }

    @keyframes strokeColor {
      100%,
      0% {
        stroke: #01b9df;
      }
      40% {
        stroke: #fff;
      }
      66% {
        stroke: #01b9df;
      }
      80%,
      90% {
        stroke: #fff;
      }
    }
`
