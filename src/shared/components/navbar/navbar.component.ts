import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../app/core/services/auth.service';
import { User } from '../../../app/core/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    CommonModule,
    RouterLink
    ]
})
export class NavbarComponent {

  currentUser: User | null = null;
  logo: string = '../../../../assets/logo.png';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
