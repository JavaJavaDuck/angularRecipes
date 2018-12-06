import { Component } from '@angular/core';
import { Recipe } from './Recipes/recipes-list/recipes.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

selectedRecipe: Recipe = null;

onSelectedRecipe(recipe) {
  console.log('ricetta ricevuta', recipe);
  this.selectedRecipe = recipe;
  }
}
