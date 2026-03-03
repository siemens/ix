import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'change-password',
    loadComponent: () =>
      import('../routes/change-password/change-password').then((m) => m.ChangePassword),
  },
  {
    path: 'login-overlay',
    loadComponent: () =>
      import('../routes/login-overlay/login-overlay').then((m) => m.LoginOverlay),
  },
];
