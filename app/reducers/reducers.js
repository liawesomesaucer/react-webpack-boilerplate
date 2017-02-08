import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import counter from './counter';

export function mainReducer(state={},{type,payload}){
  return state;
}

export default combineReducers({
   main : mainReducer,
   counter,
   routing : routerReducer
})
