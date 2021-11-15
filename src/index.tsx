import '@reach/dialog/styles.css'

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { LanguageProvider } from './i18n'
import App from './pages/App'
import store from './state'
import ThemeProvider, { ThemedGlobalStyle } from './theme'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.5,
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <LanguageProvider>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </LanguageProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
