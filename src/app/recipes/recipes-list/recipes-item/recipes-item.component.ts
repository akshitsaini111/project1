import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from '../../recipes';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() i!: Recipes;
  @Output() recipeSelected = new EventEmitter;
  onSelected() {
    this.recipeSelected.emit();
        
  }
}
