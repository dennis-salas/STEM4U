import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { loginReducer } from '../reducers/loginReducer';
import { registroReducer } from '../reducers/registroReducer';
import { uiReducer } from '../reducers/errorReducer';
import {forumReducer} from '../reducers/forumReducer'
import thunk from 'redux-thunk';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    usuario: registroReducer,
    uiError: uiReducer.apply,
    foro:  forumReducer
})
//para acciones asincronas 
export const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk))
);