import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export type CanComponentDeactivate = {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
};

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
) => (component.canDeactivate ? component.canDeactivate() : true);
