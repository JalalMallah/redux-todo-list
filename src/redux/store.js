import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const devToolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devToolsEnhancer);

export default store;
