import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, bg } from './translations'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      bg: { translation: { ...bg } },
      en: { translation: { ...en } }
    },
    fallbackLng: 'bg',
  })


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