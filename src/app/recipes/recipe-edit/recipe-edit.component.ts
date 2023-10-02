import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent {
  id!: Number
  editMode = false;
  constructor(public activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null;
      
    });
  }


}
