import {uiReducer} from 'rx/reducers/ui';
import { createStore, combineReducers } from 'redux';

console.log(uiReducer);
export default createStore(combineReducers({
    ui: uiReducer
  }),
  {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);
