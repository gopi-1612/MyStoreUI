import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public authService: AuthService) {
    debugger
  this.authService.getUser().subscribe(user => {
    console.log('Authenticated user:', user);
  }, error => {
    console.error('Error fetching user:', error);
  });
}
}
