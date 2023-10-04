import { EventEmitter, Injectable } from '@angular/core';
import { Recipes } from './recipes';
import { Ingredients } from '../shared/ingredients';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipes: Recipes[] = [
    {
      name: 'Haka',
      description: 'Noodles',
      imagePath:
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Blog-Banner-1400x400px-1024x293.jpg',
      ingredients: [
        {
          name: 'tomato',
          amount: 12,
        },
        {
          name: 'tomato',
          amount: 12,
        },
        {
          name: 'tomato',
          amount: 12,
        },
      ],
    },
    {
      name: 'Burgir',
      description: 'Not Healthy',
      imagePath:
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Blog-Banner-1400x400px-1024x293.jpg',
      ingredients: [
        {
          name: 'tomato',
          amount: 12,
        },
        {
          name: 'tomato',
          amount: 12,
        },
        {
          name: 'tomato',
          amount: 12,
        },
      ],
    },
    {
      name: 'custard',
      description: 'Sweet dish',
      imagePath:
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Blog-Banner-1400x400px-1024x293.jpg',
      ingredients: [
        {
          name: 'tomato',
          amount: 12,
        },
        {
          name: 'tomato',
          amount: 12,
        },
        {
          name: 'tomato',
          amount: 12,
        },
      ],
    },
  ];

  constructor(public shoppingListService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipes(id: number) {
    return this.recipes[id];
  }

  addIngedientToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
