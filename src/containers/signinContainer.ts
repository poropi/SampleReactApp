import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { signinActions } from '../actions/SigninAction';
import { AppState } from '../store/store';
import { SigninComponent } from '../presentationals/SigninComponent';

export interface SigninActions {
  updateEmail: (email: string) => Action<{ email: string }>;
  updatePassword: (password: string) => Action<{ password: string }>;
  signin: () => Action<{ isOpen: boolean; }>;
  closeNotification: () => Action<{ isOpen: boolean; }>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateEmail: (email: string) => dispatch(signinActions.updateEmail({email})),
    updatePassword: (password: string) => dispatch(signinActions.updatePassword({password})),
    signin: () => {
      let isOpen = true
      return dispatch(signinActions.showNotification({isOpen}));
    },
    closeNotification: () => {
      let isOpen = false
      return dispatch(signinActions.showNotification({isOpen}))
    },
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.signin);
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninComponent);