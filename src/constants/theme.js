import { mediaQueries } from './'

export const baseTheme = {
  transition: { default: '0.8s ease'},
  fonts: { default: '\'Lato\', Arial, sans-serif' },
  sidebarWidth: 80,
  mobileMenuHeight: 60,
  bodyGutter: {
    desktop: 30,
    mobile: 15,
  },
  materialShadow: '0 0 11px -5px rgba(0,0,0,0.3)',
  mediaQueries,
}

const primaryLight = "#e85a4f";
const buttonBgLight = '#fdbb1f';
const buttonBgDark = '#2f343c';

const primaryDark = '#24282f';
const secondary = '#ff9800';
const primary2 = '#edc566';

export default {
  light: {
    colors: {
      primary: primaryLight,
      sidebar: {
        buttonBg: buttonBgLight
      },
      white: '#fff',
      divider: '#e8e8e8',
      text: '#6f6f6f',
      field: {
        color: '#6f6f6f',
        background: '#fff',
        borderColor: '#e6e6e6',
      },
      label: {
        background: '#e6e6e6',
        color: '#757575',
      },
      chip: {
        background: primaryLight,
        color: '#fff',
      },
      pagination: {
        background: '#fff',
        color: '#6b6b6b',
        activeBackground: primaryLight,
        activeColor: '#fff'
      },
      title: '#6b6b6b',
    },
    ...baseTheme
  },
  dark: {
    colors: {
      primary: primaryDark,
      sidebar: {
        buttonBackground: buttonBgDark
      }
    }
  },
}