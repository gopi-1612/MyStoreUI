import { Routes } from '@angular/router';

export const routes: Routes = [
   // {loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), path: ''},
    {loadComponent: () => import('./login/login.component').then(m => m.LoginComponent), path: 'login'},
];
