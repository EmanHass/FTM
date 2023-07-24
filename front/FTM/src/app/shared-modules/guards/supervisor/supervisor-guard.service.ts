import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from 'src/app/auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class SupervisorGuardService implements CanActivate,CanLoad {

  constructor(private accountService:AccountService) { }
  canActivate(route:ActivatedRouteSnapshot): any {
      this.canActiveLoad(route);
  }
  canLoad(route: Route):any{
    this.canActiveLoad(route);
  }

  canActiveLoad(route: Route):boolean{
    if(this.accountService.isAdminRole()){
        return true;
    }
    this.accountService.logout();
    return false;
  }
}
