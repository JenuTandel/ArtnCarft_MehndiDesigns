import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public userdata: string;
  constructor(private router: Router) {
    this.userdata = '';
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.userdata = JSON.parse(localStorage.getItem('userToken')!);
    if (this.userdata) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
