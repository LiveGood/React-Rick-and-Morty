import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

console.log(process.env.REACT_APP_API)
const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider {...{ client }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();