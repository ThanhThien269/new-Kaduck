import { from, map } from 'rxjs';
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

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
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
