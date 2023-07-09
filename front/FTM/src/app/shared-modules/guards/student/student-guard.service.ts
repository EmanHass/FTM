import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from 'src/app/auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService implements CanActivate,CanLoad{

  constructor(private accountService:AccountService) { }
  // to prevent user to access student Route if not student role
  canActivate(route:ActivatedRouteSnapshot): any {
    this.canActiveLoad(route);
  }

  // to prevent load module if not student role
  canLoad(route: ActivatedRouteSnapshot): any{
    this.canActiveLoad(route);
  }
  canActiveLoad(route: Route):boolean{
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
