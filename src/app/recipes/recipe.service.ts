import { EventEmitter, Injectable } from '@angular/core';
import { Recipes } from './recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter;
  constructor() { }

  recipes: Recipes[] = [
    {
      name: 'Haka',
      description: 'Not Healthy',
      imagePath:
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Blog-Banner-1400x400px-1024x293.jpg',
    },
    {
      name: 'Burgir',
      description: 'Not Healthy',
      imagePath:
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Blog-Banner-1400x400px-1024x293.jpg',
    },
    {
      name: 'Burgir',
      description: 'Not Healthy',
      imagePath:
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Blog-Banner-1400x400px-1024x293.jpg',
    },
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
