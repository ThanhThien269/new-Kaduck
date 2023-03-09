import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  showFiller = false;
  constructor(private router : Router){

  }
  home(){
    this.router.navigate(['/home']);
  }
  library(){
    this.router.navigate(['/library']);
  }
  history(){
    this.router.navigate(['/history']);
  }

}
