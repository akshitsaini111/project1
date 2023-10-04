import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients!: Ingredients[];
  private isChangedSub!: Subscription;
  constructor(public shoppingService: ShoppingListService) { }
  
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredient();
    this.isChangedSub=this.shoppingService.ingChanged.subscribe((res: any) => {
      this.ingredients = res;
      console.log(res,"Akshit")
     });
  }

  test(data: Ingredients) {
    this.ingredients.push(data);
  }

  OnDestroy() {
    this.isChangedSub.unsubscribe();
  }
}
