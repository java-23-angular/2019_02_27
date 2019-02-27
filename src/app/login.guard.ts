import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {StoreProvider} from './StoreProvider';

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private storeProvider: StoreProvider, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> |
    boolean | UrlTree {

    let flag = !this.storeProvider.isLogged();
    if(!flag){
      this.router.navigate(['/']);
    }
    return flag;
  }

}
