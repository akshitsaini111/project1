import { Component } from '@angular/core';
import { Recipes } from './recipes';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe!: Recipes;

}
