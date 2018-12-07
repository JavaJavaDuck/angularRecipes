import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './Recipes/recipes-list/recipes.models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  public recipes: Recipe[] = [];

  newRecipes = new EventEmitter<Recipe[]>();

  recipeChanged = new EventEmitter<Recipe>();

  public selectedRecipe: Recipe = null;

  public changeSelectedRecipe(ricetta: Recipe) {
    console.log('changeSelectedRecipe', ricetta);
    this.selectedRecipe = ricetta;
    this.recipeChanged.emit(this.selectedRecipe);
  }

  constructor(private http: HttpClient) { }

  searchRecipes(searchTerm: string = 'cake') {

    const URL_Composta = this.URL + searchTerm;

    const response = this.http.get(URL_Composta).toPromise()
      .then((resp: {meals: []}) => {
        console.log('ricette ricevute', resp);

        if (resp.meals) {
          this.recipes = resp.meals.map(function(meal: any) {
            console.log(meal);
            const myRecipe = new Recipe(meal.strMeal, meal.strInstructions, meal.strMealThumb);
            return myRecipe;
          });
        } else {
          this.recipes = [];
        }

        console.log('recipes ripulite', this.recipes);

        this.newRecipes.emit(this.recipes);
      })
      .catch(err => {
        console.error('ERRORE!!!', err);
      });

    }

  }
