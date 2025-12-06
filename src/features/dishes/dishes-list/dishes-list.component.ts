import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../app/core/services/dish.service';
import { Dish } from '../../../app/core/models/dish.model';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  standalone: false,
})
export class DishesListComponent implements OnInit {
  dishes: Dish[] = [];
  filteredDishes: Dish[] = [];
  searchTerm = '';
  selectedCuisine = '';

  cuisines = ['Cameroun', 'Sénégal', 'Côte d\'Ivoire', 'Congo'];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes(): void {
    this.dishService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
      this.filteredDishes = dishes;
    });
  }

  applyFilters(): void {
    this.filteredDishes = this.dishes.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCuisine = !this.selectedCuisine || dish.cuisine === this.selectedCuisine;
      return matchesSearch && matchesCuisine;
    });
  }
}
