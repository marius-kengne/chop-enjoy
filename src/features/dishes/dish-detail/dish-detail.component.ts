import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../../../app/core/services/dish.service';
import { Dish } from '../../../app/core/models/dish.model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  standalone: false
})
export class DishDetailComponent implements OnInit {
  dish: Dish | null = null;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dishService.getDishById(id).subscribe(dish => {
        this.dish = dish || null;
      });
    }
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  order(): void {
    if (this.dish) {
      this.router.navigate(['/order/pickup'], {
        state: { dish: this.dish, quantity: this.quantity }
      });
    }
  }
}
