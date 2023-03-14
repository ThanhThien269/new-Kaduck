import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { User } from '@angular/fire/auth'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  // id: string = '';
  // user: User | null = null;

  // constructor(
  //   private route: ActivatedRoute,
  //   private _socket: Socket,
  //   private loginService: LoginService
  // ) {}

  // ngOnInit() {
  //   this.user = this.loginService.user;

  //   let id = this.route.snapshot.paramMap.get('id');
  //   if(!id) id = "No id found";
  //   this.id = id;

  //   this._socket.on('connect', () => {
  //     console.log("connected");
  //     this._socket.emit('join', {
  //       id: this.id,
  //       name: this.user?.displayName,
  //       type: "join"
  //     });
  //   })
  // }
//   id: string = '';
//   user: User | null = null;
//   constructor( private router: ActivatedRoute, private socket: Socket, private LoginService: LoginService){}
//   NgOnInit(){
//     this.user = this.LoginService.user;
//     let id = this.router.snapshot.paramMap.get('id');
//     if(!id) id = "No id found";
//     this.id = id;
//     this.socket.on('connect', () => {
//       console.log("connected");
//       this.socket.emit('join', {
//         id: this.id,
//         name: this.user?.displayName,
//         type: "join"
//       });
//     })
//   }
}
