import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppComponent } from './app.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';

const appRoutes: Routes = [
  {path:'',  redirectTo:'/recipes',pathMatch:'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: "", component: RecipeStartComponent },
      {path:':id', component:RecipesDetailsComponent}
      
    ]},
  {path:'shopping-list', component:ShoppingListComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
