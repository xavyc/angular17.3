import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-settings-test-component',
  standalone: true,
  templateUrl: './page-settings-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class SettingsAccountTestComponent {

  canDeactivate(): boolean {
    return true;
  }
}
