import { Component, Input } from '@angular/core';
import { Recipes } from '../recipes';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {
  @Input() recipe!: Recipes;

}
