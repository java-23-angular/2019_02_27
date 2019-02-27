import { Component, OnInit } from '@angular/core';
import {StoreProvider} from '../StoreProvider';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  email: string;

  constructor(private storeProvider: StoreProvider, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.storeProvider.login(this.email +'&'+this.password);
    this.router.navigate(['/']);
  }
}
