// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { QuestionKitState } from 'src/app/state/question_kit.state';
import * as QuestionKitActions from 'src/app/action/question_kit.action';
import { question_kit } from './../../models/question_kit.model';
import { LobbyService } from 'src/app/services/lobby.service';



@Component({
  selector: 'app-guestjoining',
  templateUrl: './guestjoining.component.html',
  styleUrls: ['./guestjoining.component.scss']
})
export class GuestjoiningComponent {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';
  // pin = this.homeService.pin;
  // userInput = new FormControl('');
  // inputMatches = false;

  constructor(
    private lobbyService: LobbyService,
    private router: Router,
    private loginService: LoginService,
    private store: Store<{ question_kit: QuestionKitState }>
  ) {
    this.currentUser = this.loginService.user;
    this.uid = this.currentUser?.uid!;
  }
  join() {
    this.lobbyService.sendMessage({
      pin: this.pin,
      uid: this.uid,
      name: this.currentUser?.displayName,
      email: this.currentUser?.email,
    });
    this.router.navigate([`join/${this.pin}`]);
    // this.homeService.join();
  }
}
