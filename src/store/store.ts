import { createStore, combineReducers } from 'redux';
import { SigninState, signinReducer } from '../states/SigninState';

export type AppState = {
  signin: SigninState
};

const store = createStore(
  combineReducers<AppState>({
    signin: signinReducer
  })
);

export default store;