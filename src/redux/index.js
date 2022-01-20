import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// reducers
import contactReducer from './reducers/contact'
import loadingReducer from './reducers/loading'

const reducers = combineReducers({
    contactReducer,
    loadingReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))
export default store