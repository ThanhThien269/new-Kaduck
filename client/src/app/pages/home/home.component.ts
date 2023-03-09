import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router : Router) {}
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
}
