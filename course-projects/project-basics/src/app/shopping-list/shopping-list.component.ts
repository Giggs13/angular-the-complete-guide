import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.ingredientsSubscription = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  onEditItem(ingridientIndex: number): void {
    this.shoppingListService.startedEditingIngredient.next(ingridientIndex);
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }
}
