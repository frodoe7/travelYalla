import {createStore, combineReducers} from 'redux';
import data from './reducers/main';

export const store = createStore(data);