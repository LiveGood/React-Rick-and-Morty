import React, { useState, useEffect, createContext } from 'react';
import BrowserHistory from './BrowserHistory'
import { Router, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next';

import { theme } from './constants'
import ResponsiveRender from './components/ResponsiveRender';
import { Sidebar } from './components'
import { MobileHeader } from './components'
import { CharacterIcon, EpisodeIcon } from './assets/svg'
import GlobalStyle from './GlobalStyle'
import EpisodesList from './containers/EpisodesList'
import CharactersList from './containers/CharactersList'
import CharacterSingle from './containers/CharacterSingle'

export const ThemeSwtichContext = createContext();

const AppElement = styled.div`
  position: relative;
  .animated-router {
    & > * {
      width: 100%;
      position: absolute;
    }
  }
`;


const ROUTES = [
  {
    path: '/',
    component: EpisodesList,
  },
  {
    path: '/characters',
    component: CharactersList,

  },
  {
    path: '/characters/:id',
    component: CharacterSingle,
  }
]



function App() {
  const { t } = useTranslation()
  const LOCAL_STORAGE_THEME_KEY = 'themeMode'
  let localStorageThemeMode = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (localStorageThemeMode !== 'light' &&
    localStorageThemeMode !== 'dark') {
    localStorageThemeMode = 'light'
  }

  const [themeMode, setThemeMode] = useState(localStorageThemeMode)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeMode)
  }, [themeMode])

  const NAV_ITEMS = [
    {
      name: t('episodes'),
      icon: EpisodeIcon,
      to: '/',
      exact: true,
    },
    {
      name: t('characters'),
      icon: CharacterIcon,
      to: '/characters',
      exact: false,
    },
  ]

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <AppElement>
        <Router history={BrowserHistory}>

          <ThemeSwtichContext.Provider value={{themeMode, setThemeMode}}>
            <ResponsiveRender>
              {breakpoint => <>
                {breakpoint.smUp && (<Sidebar {... {navItems: NAV_ITEMS}} />)}
                {breakpoint.xsOnly && (<MobileHeader {... {navItems: NAV_ITEMS}} />)}
              </>}
            </ResponsiveRender>
          </ThemeSwtichContext.Provider>

          {ROUTES.map(({ path, component, ...restProps })=> {
            return (
              <Route
                key={`route-${path}`}
                exact
                {...{ path, component }}
                {...restProps}
              />
            )
          })}
        </Router>
      </AppElement>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

