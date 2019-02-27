import {Subject} from 'rxjs';

export class StoreProvider {
  private token: string;
  stateEmitter: Subject<boolean> = new Subject();

  constructor() {
    this.token = localStorage.getItem('token');
  }

  login(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
    this.stateEmitter.next(this.isLogged());
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.stateEmitter.next(this.isLogged());
  }

  isLogged():boolean{
    return this.token !== null;

  }
}
