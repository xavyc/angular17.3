import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'page-settings-layout-component',
  standalone: true,
  templateUrl: './page-settings-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class PageSettingsLayoutComponent implements OnInit {

  isLoaded = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded.set(true);
    }, 1000);
  }
}
