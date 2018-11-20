import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'],
      {queryParams: {allowEdit: '1'}, fragment: 'loading'})
      .then(value => console.log(value), error => console.log(error));
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
