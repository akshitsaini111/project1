import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  recipes!: Recipes[];

  constructor(public recipeService: RecipeService) { }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipe(); 
  }
}


