import { Component, Input } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {
  @Input() recipe!: Recipes;
  constructor(public recipeService:RecipeService){}
  onAddToShoppingList() {
    this.recipeService.addIngedientToShoppingList(this.recipe.ingredients);
  }

}
