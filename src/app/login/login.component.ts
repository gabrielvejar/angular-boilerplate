import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    window.localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['users']);
  }
}
