import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink
    ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToDishes(): void {
    this.router.navigate(['/dishes']);
  }
}