import { LoginService } from './../../services/login.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  constructor(private auth:LoginService) { }
  @Output() newOpenSideBarEvent = new EventEmitter<string>();
  panelOpenState = false;
  showFiller = false;

  toggle() {
    this.newOpenSideBarEvent.emit('heh')
  }
  signOut(){
    this.auth.logout();
  }
}
