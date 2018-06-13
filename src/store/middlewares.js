import { middleware as thunkMiddleware } from 'redux-saga-thunk'

const req = require.context('.', true, /\.\/.+\/middleware\.js$/)

export default req.keys()
  .map(key => req(key).default)
  .concat([
    thunkMiddleware,
  ])
