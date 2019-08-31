import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const signinActions = {
  updateEmail: actionCreator<{email:string}>('ACTIONS_UPDATE_EMAIL'),
  updatePassword: actionCreator<{password:string}>('ACTIONS_UPDATE_PASSWORD'),
  showNotification: actionCreator<{isOpen:boolean}>('ACTIONS_SHOW_NOTIFICATION'),
};