import {createReducer, on} from"@ngrx/store";
import { AuthState } from 'src/state/auth.state';
import *as AuthActions from "../../app/action/auth.action"
const initialState:AuthState = {

idToken: "",
error: ""

};
export const authReducer = createReducer
(
  initialState,
  on(AuthActions.login, (state) =>({ ...state , error:""})),
  on(AuthActions.loginSuccess, (state,{idToken}) =>({ ...state , idToken, error:""})),
  on(AuthActions.loginFailure, (state) =>({ ...state , error:""})),
  on(AuthActions.logout, (state) =>({ ...state ,idToken:"", error:""}))
);
