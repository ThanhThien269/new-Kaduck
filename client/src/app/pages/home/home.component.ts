import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import { User } from '@angular/fire/auth'
<<<<<<< HEAD
=======
import { FormControl, FormGroup } from '@angular/forms';

>>>>>>> 5698e4873af73ae6386ffd523c10b5c7a531e4ab
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User | null = null;
  uid: string = '';
  pin: string = '';

  inputPin = new FormGroup({
    input_pin: new FormControl('')
  });

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

  join() {
    // console.log(this.inputPin.value);
    // if(this.pin ==''){
    //   alert('HAY NHAP GI DO');
    // }else if(this.inputPin.value !== this.pin){
    //   console.log('Nhap sai');
    // }else{
    this.router.navigate([`join/${this.pin}`]);

  }
}
