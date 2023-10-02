import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from '../../recipes';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() i!: Recipes;
  @Input() index!: Number;

 

}
