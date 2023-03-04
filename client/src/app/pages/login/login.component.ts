import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

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
  constructor( private loginService: LoginService ){}
  users: any;


  ngOnInit(): void{
    onAuthStateChanged(this.loginService.login,(users)=>{
      console.log(users)
if( users != null){
  this.users = users;
}else{
  this.users= !users;
}
    })
  }
  login(){
    this.loginService.loginWithGoogle().then((res) =>{
      console.log(res)
    })
  }
  logout(){
    this.loginService.logout();
  }
}

