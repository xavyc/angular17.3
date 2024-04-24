import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-settings-layout-component',
  standalone: true,
  templateUrl: './page-settings-base-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class PageSettingsBaseLayoutComponent {

}
