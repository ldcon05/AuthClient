import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import AuthGuard from './routes/guards/auth-guard';
import LoginGuard from './routes/guards/login-guard'
import HomeResolve from './routes/resolves/home-resolve';

const routes: Routes = [
  {path: '',  pathMatch: 'full' , component: LoginComponent, canActivate: [LoginGuard] },
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], resolve: {home: HomeResolve} },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export default class AppRouter {}
