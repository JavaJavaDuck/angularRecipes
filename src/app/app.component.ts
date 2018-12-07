import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipes/recipes-list/recipes.models';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log('ricetta ricevuta', recipe);
    this.selectedRecipe = recipe;
    }

    constructor(private serv: RecipesService) {

    }

  ngOnInit() {
  }
}
