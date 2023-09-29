import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingChanged = new EventEmitter;
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
    this.ingChanged.emit(this.ingredients.slice());
  }
}
