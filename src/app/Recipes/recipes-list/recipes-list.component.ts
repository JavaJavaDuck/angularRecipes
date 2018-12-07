import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.models';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipe[] = [];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  onSelectedList(recipe) {
    console.log('elemento lista selezionato', recipe);
    this.selectedRecipe.emit(recipe);
  }


  constructor(recipeService: RecipesService) {
    recipeService.newRecipes.subscribe(

      (ricetteAggiornate) => {
        console.log('ricette aggiornate', ricetteAggiornate);
        this.recipes = ricetteAggiornate;
      },

      function(error) {
        console.error(error);
      }
    );
   }

  ngOnInit() {
  }

}
