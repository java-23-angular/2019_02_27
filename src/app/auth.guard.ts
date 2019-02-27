import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StoreProvider} from './StoreProvider';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private storeProvider: StoreProvider, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean | UrlTree {
    let flag =  this.storeProvider.isLogged();
    if(!flag){
      this.router.navigate(['/login']);
    }
    return flag;
  }

}
