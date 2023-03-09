import { Actions } from '@ngrx/effects';
import { AuthState } from 'src/state/auth.state';
import { LoginService } from './../../services/login.service';
import { Component, Input, Output } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Store } from '@ngrx/store';
import *as AuthActions from "../../../app/action/auth.action"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',keyframes([
          style({transform: 'rotate(0deg)', offset: 0}),
          style({transform: 'rotate(1turn)', offset: 1})
        ])
        )
    ]),

  ])
  ]
})
export class LoginComponent {
  hide=true;
  constructor( private store: Store <{ auth: AuthState}> , private loginService: LoginService){}
  ngOnInit(): void{

  }
  login(){
   this.store.dispatch(AuthActions.login())
  }
  logout(){

  }
}

