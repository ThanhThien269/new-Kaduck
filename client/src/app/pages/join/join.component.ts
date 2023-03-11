import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { User } from '@angular/fire/auth'
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  id: string = '';
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private _socket: Socket,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.user = this.loginService.user;

    let id = this.route.snapshot.paramMap.get('id');
    if(!id) id = "No id found";
    this.id = id;

    this._socket.on('connect', () => {
      console.log("connected");
      this._socket.emit('join', {
        id: this.id,
        name: this.user?.displayName,
        type: "join"
      });
    })
  }
}
