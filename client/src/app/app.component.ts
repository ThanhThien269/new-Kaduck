import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kaduck';
  showFiller = false;
  constructor(auth: Auth, private route: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.route.navigateByUrl('/home');
      } else {
        this.route.navigateByUrl('/login');
      }
    });
  }
}
