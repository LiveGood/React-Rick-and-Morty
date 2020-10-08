import React, { useState, useEffect } from 'react';
import BrowserHistory from './BrowserHistory'
import { Router, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import './index.css';

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
  return (
    <ThemeProvider theme={{}}>
      <Router history={BrowserHistory}>
        <AppElement>
          <div>Hello</div>
        </AppElement>
      </Router>
    </ThemeProvider>
  );
}

export default App;

