import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
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
  test(data:Ingredients) {
    this.ingredients.push(data);
  }
}
