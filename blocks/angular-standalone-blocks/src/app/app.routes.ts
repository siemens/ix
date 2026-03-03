import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'example-01',
    loadComponent: () => import('../routes/example-01/example').then((m) => m.Example),
  },
  {
    path: 'login-overlay',
    loadComponent: () =>
      import('../routes/login-overlay/login-overlay').then(
        (m) => m.LoginOverlay,
      ),
  },
  {
    path: 'upload-01',
    loadComponent: () => import('../routes/upload-01/upload-files').then((m) => m.UploadFiles),
  },
];
