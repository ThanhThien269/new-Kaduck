import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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

