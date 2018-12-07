import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipes.models';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()currentRicetta: Recipe = null;
  recipeChanged: any;



  constructor(private service: RecipesService) { }

  ngOnInit() {
    this.service.recipeChanged.subscribe(
      newRecipe => {
        this.currentRicetta = newRecipe;
      },
      error => console.error(error)
    );
  }

}
