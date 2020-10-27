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

export default {
  light: {
    colors: {
      primary: "#e85a4f",
      sidebar: {
        buttonBg: "#fdbb1f"
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
        background: "#e85a4f",
        color: '#fff',  
      },
      pagination: {
        background: '#fff',
        color: '#6b6b6b',
        activeBackground: "#e85a4f",
        activeColor: '#fff'
      },
      tabContent: {
        background: "#e85a4f",
        activeBackground: '#fff',
        color: '#fff',
        activeColor: "#e85a4f"
      },
      title: '#6b6b6b',
    },
    ...baseTheme
  },
  dark: {
    colors: {
      primary: "#24282f",
      secondary: "#ff9800",
      light: '#dadada',
      card: "#3c3e44",
      background: '#202329',
      divider: '#505050',
      title: '#afafaf',
      label: {
        background: "#2f343c",
        color: '#a7a7a7',
      },
      chip: {
        background: '#595b5f',
        color: '#fff',
      },
			text: '#b1b1b1',
      pagination: {
        background: 'primaryDarkBg',
        color: '#dadada',
        activeBackground: '#777777',
        activeColor: '#fff',
      },
      field: {
        color: '#b1b1b1',
        background: "#3c3e44",
        borderColor: "#3c3e44",
      },
      tabContent: {
        nav: {
          background: "#24282f",
          activeBackground: "#3c3e44",
          color: '#dadada',
          activeColor: '#dadada',
        }
      },
      sidebar: {
        buttonBackground: "#2f343c"
      }
    }
  },
}