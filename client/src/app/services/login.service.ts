import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users:User|undefined
  constructor( public login: Auth) { }
  async loginWithGoogle(){
    let provider = new GoogleAuthProvider();
// signInWithPopup(this.auth ,provider)
  await  signInWithPopup(this.login, provider)
}
async logout(){

 await this.login.signOut();

}
}

