import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Burger',
      'This is simply a test',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Meat balls', 4)]),
    new Recipe('Caeser Salad',
      'This is simply a test',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2-696x696.jpg',
      [
        new Ingredient('Beef', 2),
        new Ingredient('Ketchup', 1),
        new Ingredient('Salad', 1),
        new Ingredient('Meat balls', 2),
        new Ingredient('Onien', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingrediens: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingrediens);
  }

  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
