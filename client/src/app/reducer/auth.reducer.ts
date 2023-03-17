import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../state/auth.state';
import * as AuthActions from '../../app/action/auth.action';
const initialState: AuthState = {
  idToken: '',
  error: '',
};
export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { type }) => {
    // console.log(type);
    return { ...state, error: '' };
  }),
  on(AuthActions.loginSuccess, (state, { idToken, type }) => {
    // console.log(type);
    return {
      ...state,
      idToken,
      error: '',
    };
  }),
  on(AuthActions.loginFailure, (state) => ({ ...state, error: '' })),
  on(AuthActions.logout, (state) => ({ ...state, idToken: '', error: '' }))
);
