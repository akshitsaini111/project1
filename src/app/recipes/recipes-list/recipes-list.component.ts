import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  recipes!: Recipes[];

  constructor(public recipeService: RecipeService, public router:Router , public activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipe(); 
  }
  onNewRecipe() {
    this.router.navigate(['new-recipe'], {relativeTo:this.activatedRoute});
    
  }
}


