import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((file) => file.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((file) => file.HomeComponent),
  },
];
