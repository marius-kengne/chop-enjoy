import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickupService } from '../../../app/core/services/pickup.service';
import { PickupPoint } from '../../../app/core/models/pickup-point.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-pickup-selection',
  templateUrl: './pickup-selection.component.html',
  imports: [
    CommonModule,
    NavbarComponent
    ]
})
export class PickupSelectionComponent implements OnInit {
  pickupPoints: PickupPoint[] = [];
  selectedPoint: PickupPoint | null = null;

  constructor(
    private pickupService: PickupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Charger les points de retrait du cuisinier
    this.pickupService.getPickupPointsByCook('cook1').subscribe(points => {
      this.pickupPoints = points;
    });
  }

  selectPoint(point: PickupPoint): void {
    this.selectedPoint = point;
  }

  continue(): void {
    if (this.selectedPoint) {
      this.router.navigate(['/order/time-slot'], {
        state: { pickupPoint: this.selectedPoint }
      });
    }
  }
}