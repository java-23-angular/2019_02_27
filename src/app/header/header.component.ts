import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreProvider} from '../StoreProvider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isLogged: boolean = false;
  subscription;
  constructor(private storeProvider: StoreProvider) {
    this.isLogged = this.storeProvider.isLogged();
    this.subscription = this.storeProvider
      .stateEmitter
      .subscribe(value => this.isLogged = value);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.storeProvider.logout();
  }
}
