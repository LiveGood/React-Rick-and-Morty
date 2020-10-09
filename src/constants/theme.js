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