import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-settings-second-component',
  standalone: true,
  templateUrl: './page-settings-second.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class SettingsAccountSecondComponent {

  canDeactivate(): boolean {
    return true;
  }
}
