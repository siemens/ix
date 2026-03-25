import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'change-password',
    loadComponent: () =>
      import('../routes/change-password/change-password').then((m) => m.ChangePassword),
  },
  {
    path: 'password-criteria',
    loadComponent: () =>
      import('../routes/password-criteria/password-criteria').then((m) => m.PasswordCriteria),
  },
  {
    path: 'login-overlay',
    loadComponent: () =>
      import('../routes/login-overlay/login-overlay').then((m) => m.LoginOverlay),
  },
];
