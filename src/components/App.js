import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { HomePage } from 'components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import theme from './themes/default'
import todos from '../store/reducer'

const store = createStore(todos)

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </ThemeProvider>
    </Provider>
  )
}

export default App
