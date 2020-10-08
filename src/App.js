import React, { useState, useEffect } from 'react';
import BrowserHistory from './BrowserHistory'
import { Router, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './constants'
import './index.css';
import ResponsiveRender from './components/ResponsiveRender';

import { Sidebar } from './components'

const AppElement = styled.div`
  position: relative;


  .animated-router {
    & > * {
      width: 100%;
      position: absolute;
    }
  }
`;

function App() {
  // TODO: add local storage latere
  const themeMode = 'light'

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Router history={BrowserHistory}>
        <AppElement>
          <ResponsiveRender>
            <Sidebar >

            </Sidebar>
          </ResponsiveRender>
        </AppElement>
      </Router>
    </ThemeProvider>
  );
}

export default App;

