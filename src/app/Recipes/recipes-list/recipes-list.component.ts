import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
ricetta: Recipe = new Recipe(
    'Lasagne',
    'Lorem Ipsum',
    'https://cc-media-foxit.fichub.com/image/fox-it-life/1fc0fb34-c6b2-43b1-b9c4-abe0744b8cfa/lasagna-classica-maxw-654.jpg'
  );

  recipes: Recipe[] = [
    new Recipe(
      'Lasagne',
      'Lorem Ipsum',
      'https://cc-media-foxit.fichub.com/image/fox-it-life/1fc0fb34-c6b2-43b1-b9c4-abe0744b8cfa/lasagna-classica-maxw-654.jpg'
    ),

    new Recipe(
      'Carbonara',
      'Lorem Ipsum',
      'https://www.gustissimo.it/articoli/ricette/pasta-salumi/spaghetti-alla-carbonara.jpg'
    ),

    new Recipe(
      'Amatriciana',
      'Lorem Ipsum',
      'http://www.strettoweb.com/wp-content/uploads/2016/08/31-8-Amatriciana-in-Piazza-Portosalvo-800x600.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
