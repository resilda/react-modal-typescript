import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IGlobalState } from './propsTypes/propsTypes';
import rootReducer from './rootReducer';

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
