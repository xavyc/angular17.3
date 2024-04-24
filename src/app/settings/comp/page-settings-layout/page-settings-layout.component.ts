import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-settings-layout-component',
  standalone: true,
  templateUrl: './page-settings-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSettingsLayoutComponent {}
