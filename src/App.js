import React, { useState, useEffect } from 'react';
import BrowserHistory from './BrowserHistory'
import { Router, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './constants'
import './index.css';
import ResponsiveRender from './components/ResponsiveRender';

import { Sidebar } from './components'
// import { CharactersList, EpisodesList, CharacterSingle } from './containers'
import { CharacterIcon, EpisodeIcon } from './assets/svg'
import GlobalStyle from './GlobalStyle'

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
    // component: EpisodesList,
    component: () => { return <div>Episodes</div> },
  },
  {
    path: '/characters',
    // component: CharactersList,
    component: () => { return <div>Characters</div> },

  },
  {
    path: '/characters/:id',
    // component: CharacterSingle,
    component: () => { return <div>Single Character</div> },
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
              <Sidebar {... {navItems: NAV_ITEMS}} />
            </ResponsiveRender>


          <Route path="/">
            {ROUTES[0].component}
          </Route>

          <Route path="/characters">
            {ROUTES[1].component}
          </Route>
          {/* {ROUTES.map(({ path, component, ...restProps })=> {
            return (
              <Route
                key={`route-${path}`}
                exact
                {...{ path, component }}
                {...restProps}
              />
            )
          })} */}
        </Router>
      </AppElement>
      {/* <GlobalStyle /> */}
    </ThemeProvider>
  );
}

export default App;

