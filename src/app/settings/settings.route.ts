import { Route } from '@angular/router';
import { canDeactivateGuard } from '../guards/can-deactivate.guard';

export default [
  {
    path: '',
    children: [
      {
        path: 'compte',
        component: PageSettingsAccountComponent,
        children: [
          {
            path: 'planning',
            component: SettingsTestComponent,
            canDeactivate: [canDeactivateGuard],
          },
          {
            path: 'notifications',
            component: SettingsTestComponent,
            canDeactivate: [canDeactivateGuard],
          },
        ],
      },
    ],
  },
] as Route[];
