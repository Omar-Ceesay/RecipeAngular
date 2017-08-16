import { Component, OnInit, Input } from '@angular/core';

import Recipe from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tacos', 'Mexican Food', 'http://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png'),
    new Recipe('Pizza', 'American  Food', 'http://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png'),
    new Recipe('Salad', 'Vegan Food', 'http://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png')
  ];

  btnCheck = false;

  foodName: string;
  img: string;
  desc: string;

  constructor() { }

  ngOnInit() {
  }

  onRecipeAdded(recipeData: {name: string, desc: string, path: string}) {
    this.recipes.push({
      name: this.foodName,
      description: this.desc,
      imagePath: this.img
    });
  }

  checkFields() {
    this.btnCheck = true;
  }
}
