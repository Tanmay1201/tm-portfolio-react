import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './Reducers/rootReducer'
import thunk from 'redux-thunk'
const Store  = createStore(rootReducer,applyMiddleware(thunk,logger))
export default Store