import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreProvider} from './StoreProvider';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  {path: 'contacts', component: ContactsComponent,canActivate:[AuthGuard]},
  {path: 'add', component: ContactFormComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ContactsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StoreProvider,AuthGuard,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
