import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './Reducers/rootReducer'
const Store  = createStore(rootReducer,applyMiddleware(logger))
export default Store