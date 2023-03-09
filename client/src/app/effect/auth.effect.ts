
import { idToken, User, signOut } from '@angular/fire/auth';
import { login, logout } from './../action/auth.action';



import { Injectable } from '@angular/core';
import *as AuthActions from "../../app/action/auth.action"
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { switchMap,map, from, catchError } from 'rxjs';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';
@Injectable()
export class AuthEffects{
  constructor( private action$ :Actions,private authService: LoginService ){}
    login$ = createEffect (()=> this.action$.pipe(
      ofType(AuthActions.login),
      switchMap(()=>{
        return this.authService.login();
      }),map((token)=>{
        return AuthActions.loginSuccess(token);
      }),
      catchError((error)=>{
        return from([AuthActions.loginFailure(error)])
      })
    ));
    logout$ = createEffect (()=> this.action$.pipe(
      ofType(AuthActions.logout),
      switchMap(()=>{
        return this.authService.logout();
      }),map(()=>{
        return AuthActions.logoutSuccess();
      }),
    ));

}
