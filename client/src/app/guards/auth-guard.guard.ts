


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'

})
export class AuthGuardGuard implements CanActivate {
  router: any;
  constructor (private LoginService: LoginService,private auth:Auth){}
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise ((resovle,reject) =>{
        onAuthStateChanged(this.auth,(users)=>{
          if( users){
            resovle (true)
          }else {

            resovle(false);
          }
        })
      })

    }}
