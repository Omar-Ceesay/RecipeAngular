import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import * as mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost/recipeBook');

// const RecipeSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   imagePath: String
// });


import Recipe from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  results: {};

  reloadRecipes() {
    this.http.get('http://localhost:3003/api/recipes').subscribe(data => {
      this.results = data;
    });
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3003/api/recipes').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    });
  }

  onRecipeAdded(food, desc, img) {
    if (!img) {
      img = 'http://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png';
    }
    this.http.post('http://localhost:3003/api/recipes', {
      name: food,
      description: desc,
      imagePath: img
    }).subscribe();
    this.reloadRecipes();
  }

}
