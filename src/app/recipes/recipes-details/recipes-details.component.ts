import { Component, Input } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {
  recipe!: Recipes;
  id!: number;
  constructor(public recipeService: RecipeService, public activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => { 
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipes(this.id);
      
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngedientToShoppingList(this.recipe.ingredients);
  }

}
