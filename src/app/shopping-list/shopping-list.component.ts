import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients!: Ingredients[];
  constructor(public shoppingService: ShoppingListService) { }
  
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredient();
    this.shoppingService.ingChanged.subscribe((res: any) => {
      this.ingredients = res;
      console.log(res,"Akshit")
     });
  }

  test(data: Ingredients) {
    this.ingredients.push(data);
  }
}
