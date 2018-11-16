import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
    this.ingredients = shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }
}
