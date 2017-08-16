import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-listitem',
  templateUrl: 'recipeListItem.component.html'
})

export class RecipeListComponent {
  @Input() curItem: {name: string, description: string, imagePath: string};

  recipe: {};


  constructor() {
  }

}
