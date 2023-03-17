import { from, map, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  user: User | null = null;
  user$: any = new Subject<User | null>();

  constructor(public auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.user$.next(this.user);
      } else {
        this.user = null;
        this.user$.next(this.user);
      }
    });
  }

  async login() {
    let cred = await signInWithPopup(this.auth, new GoogleAuthProvider());
    return cred.user.getIdToken();
  }

  async logout() {
    return signOut(this.auth);
  }
}
