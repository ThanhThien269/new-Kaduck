import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  constructor (private router: Router){}

  lobby(){
    this.router.navigate(['/lobby']);
  }

}
