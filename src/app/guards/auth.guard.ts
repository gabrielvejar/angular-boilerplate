import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isAuthenticated = false;

  // ...
  if (window.localStorage.getItem('isAuthenticated') === 'true') {
    isAuthenticated = true;
  }

  if (!isAuthenticated) router.navigate(['/login']);

  return isAuthenticated;
};
