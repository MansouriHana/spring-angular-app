import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStoreService } from '../services/login-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate():boolean {
    console.log("AuthGuard#canActivate called");
    if(this.loginStore.isLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  constructor( private loginStore: LoginStoreService, private router:Router){
   
  }
}
