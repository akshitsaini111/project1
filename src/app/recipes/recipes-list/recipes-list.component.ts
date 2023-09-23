import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter;
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

  onRecipeSelected(data: Recipes) {
    this.recipeWasSelected.emit(data)
    console.log(data);
    
  }
}


