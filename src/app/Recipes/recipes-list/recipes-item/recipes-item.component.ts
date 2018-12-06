import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.models';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

@Input()currentRicetta: Recipe;

@Output() selectedRecipe = new EventEmitter();

  onSelectedItem() {
    console.log('ricetta selezionata', this.currentRicetta);
    this.selectedRecipe.emit(this.currentRicetta);
  }

  constructor() { }

  ngOnInit() {
  }

}
