
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import { User } from '@angular/fire/auth'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';
  // pin = this.homeService.pin;
  // userInput = new FormControl('');
  // inputMatches = false;

  constructor(
    private router : Router,
    private loginService: LoginService,

  )
  {
    this.currentUser = this.loginService.user;
    this.uid = this.currentUser?.uid!;

  }
  ngOnInit(): void {

  }

  callingFunction() {

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

  join(){
    this.router.navigate([`join/${this.pin}`]);
    // this.homeService.join();
  }
}
