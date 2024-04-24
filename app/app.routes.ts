import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.route'),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
