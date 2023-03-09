import { idToken } from "@angular/fire/auth";
import {createAction} from "@ngrx/store"
export const login = createAction(
  '[Auth] Login'
);
 export const loginSuccess = createAction(
    '[Auth] LoginSuccess',
    (idToken:string)=>({idToken})
 );
 export const loginFailure = createAction(
  '[Auth] LoginFailure',
  (error: string)=>({error})
);
export const logout = createAction(
  '[Auth] Logout'
);
export const logoutSuccess = createAction(
  '[Auth] LogoutSuccess'
);


