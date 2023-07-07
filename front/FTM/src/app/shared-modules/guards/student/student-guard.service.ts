import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from 'src/app/auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService implements CanActivate,CanLoad{

  constructor(private accountService:AccountService) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    if(this.accountService.isStudentRole()){
      let permission = route.data['permissions'];
      if(this.accountService.hasPermission(permission)){
        return true;
      }
    }
    this.accountService.logout();
    return false;
  }

  canLoad(route: Route): boolean{
    if(this.accountService.isStudentRole()){
      let permission = route.data['permissions'];
      if(this.accountService.hasPermission(permission)){
        return true;
      }
    }
    this.accountService.logout();
    return false;   
  }
}
