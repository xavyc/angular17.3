import { Route } from '@angular/router';
import { canDeactivateGuard } from '../guards/can-deactivate.guard';
import { PageSettingsLayoutComponent } from './comp/page-settings-layout/page-settings-layout.component';
import { SettingsAccountTestComponent } from './comp/page-settings-test/page-settings-test.component';
import { PageSettingsBaseLayoutComponent } from './comp/page-settings-base-layout/page-settings-base-layout.component';
import { SettingsAccountSecondComponent } from './comp/page-settings-second/page-settings-second.component';

export default [
  {
    path: '',
    component: PageSettingsBaseLayoutComponent,
    children: [
      {
        path: 'account',
        component: PageSettingsLayoutComponent,
        children: [
          {
            path: 'test',
            component: SettingsAccountTestComponent,
            canDeactivate: [canDeactivateGuard],
          },
          {
            path: 'second',
            component: SettingsAccountSecondComponent,
            canDeactivate: [canDeactivateGuard],
          },
        ],
      },
      { path: '', redirectTo: '/settings/account', pathMatch: 'full' },
      { path: '**', redirectTo: '/settings/account' },
    ],
  },
] as Route[];
