import { from, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
//   users:User|undefined
//   constructor( public login: Auth) { }
//   async loginWithGoogle(){
//     let provider = new GoogleAuthProvider();
// // signInWithPopup(this.auth ,provider)
//   await  signInWithPopup(this.login, provider)
// }
// async logout(){

//  await this.login.signOut();

// }
constructor(private Login: Auth){}
async login(){
  let cred =  await signInWithPopup ( this.Login, new GoogleAuthProvider());
  return cred.user.getIdToken();
}
async logout(){
  return signOut(this.Login)
}
}

