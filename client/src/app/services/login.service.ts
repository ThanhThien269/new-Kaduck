import { from, map } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users: User | undefined;

  constructor(private auth: Auth) {}
  async login() {
    let cred = await signInWithPopup(this.auth, new GoogleAuthProvider());
    return cred.user.getIdToken();
  }
  async logout() {
    return signOut(this.auth);
  }
}
