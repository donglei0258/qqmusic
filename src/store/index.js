import root from './reduxcer'
import  {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
export default createStore(root,applyMiddleware(thunk))