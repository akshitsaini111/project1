import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingChanged = new Subject;
  ingredients: Ingredients[] = [
    {
      name: 'Bun',
      amount: 10,
    },
    {
      name: 'Bun',
      amount: 10,
    },
    {
      name: 'Bun',
      amount: 10,
    },
  ];

  constructor() {}

  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(data: Ingredients) {
    this.ingredients.push(data);
    this.ingChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingChanged.next(this.ingredients.slice());
    
  }
}
