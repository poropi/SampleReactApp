import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { signinActions } from '../actions/SigninAction';

export interface SigninState {
  email: string;
  password: string;
  isOpen: boolean;
}

const initialState: SigninState = {
  email: '',
  password: '',
  isOpen: false
};

export const signinReducer = reducerWithInitialState(initialState)
.case(signinActions.showNotification, (state, isOpen) => {
  return Object.assign({}, state, isOpen);
})
.case(signinActions.updatePassword, (state, password) => {
    return Object.assign({}, state, password);
})
.case(signinActions.updateEmail, (state, email) => {
    return Object.assign({}, state, email);
});