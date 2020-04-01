import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import applicationReducers from '../reducer/applicationReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        applications : applicationReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore