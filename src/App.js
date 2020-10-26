import React, { useState, useEffect } from 'react';
import BrowserHistory from './BrowserHistory'
import { Router, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './constants'
import './index.css';
import ResponsiveRender from './components/ResponsiveRender';

import { Sidebar } from './components'
import { MobileHeader } from './components'
import { CharacterIcon, EpisodeIcon } from './assets/svg'
import GlobalStyle from './GlobalStyle'
import EpisodesList from './containers/EpisodesList'
import CharactersList from './containers/CharactersList'
import CharacterSingle from './containers/CharacterSingle'

const AppElement = styled.div`
  position: relative;
  .animated-router {
    & > * {
      width: 100%;
      position: absolute;
    }
  }
`;

const NAV_ITEMS = [
  {
    name: 'episodes',
    icon: EpisodeIcon,
    to: '/',
    exact: true,
  },
  {
    name: 'characters',
    icon: CharacterIcon,
    to: '/characters',
    exact: false,
  },
]

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
  // TODO: add local storage latere
  const themeMode = 'light'

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <AppElement>
        <Router history={BrowserHistory}>
            <ResponsiveRender>
              {breakpoint => <>
                {breakpoint.smUp && (<Sidebar {... {navItems: NAV_ITEMS}} />)}
                {breakpoint.xsOnly && (<MobileHeader {... {navItems: NAV_ITEMS}} />)}
              </>}
            </ResponsiveRender>

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

