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
  currentName: string = '';
  alreadyJoined: boolean = false;
  // pin = this.homeService.pin;
  // userInput = new FormControl('');
  // inputMatches = false;

  panelOpenState = false;


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
    // this.lobbyService.sendMessage({
    //   pin: this.pin,
    //   uid: this.uid,
    //   name: this.currentUser?.displayName,
    //   email: this.currentUser?.email,
    // });
    // this.lobbyService.joinLobby(
    //   this.pin,
    //   {
    //     name: this.currentUser?.displayName,
    //     score: 0,
    //     correctAnswer: 0,
    //   }
    // );
    this.lobbyService.checkLobby(this.pin);
    this.lobbyService.getLobbyJoined().subscribe((res: any) => {
      console.log(res);
      
      if(res.msg == 'Lobby found'){
        this.uid = (res.players.length++).toString();
        this.alreadyJoined = true;
      }
    });
    // this.homeService.join();
  }

  enterName() {
    console.log(this.uid);
    let temp = {
      name: this.currentName,
      score: 0,
      correctAnswer: 0,
      uid: this.uid,
    }
    this.lobbyService.currentPlayer = temp;
    this.lobbyService.joinLobby(
      this.pin,
      temp
    )
    this.router.navigate([`join/${this.pin}`]);
  }



  user!: User|null;
  user$= new Observable<User|null>

  // ngOnInit(): void {
  //     this.user$=this.loginService.user$;
  //     this.user$.subscribe(user =>{
  //       this.user =user;
  //       console.log(user);
  //     })
  // }

  login(){
    this.loginService.login();

  }
  logout(){
    this.loginService.logout();
  }


}
