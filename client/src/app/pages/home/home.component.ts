import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import { User } from '@angular/fire/auth'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';

  constructor(
    private router : Router,
    private loginService: LoginService,
  ) {
    this.currentUser = this.loginService.user;
    this.uid = this.currentUser?.uid!;

  }

  library(){
    this.router.navigate(['/library']);
  }

  history(){
    this.router.navigate(['/history']);
  }

  createquestion(){
    this.router.navigate(['/createquestion']);
  }

  lobby(){
    this.router.navigate(['/lobby']);
  }

  join() {
    this.router.navigate([`join/${this.pin}`]);

  }
}
