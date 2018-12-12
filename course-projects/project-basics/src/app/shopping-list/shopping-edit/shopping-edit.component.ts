import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIngredientIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditingIngredient
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          'name': this.editedIngredient.name,
          'amount': this.editedIngredient.amount
        });
      });
  }

  onSubmit() {
    const value = this.form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIngredientIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.reset();
  }

  reset(): void {
    this.form.resetForm();
    this.editMode = false;
    this.editedIngredientIndex = null;
    this.editedIngredient = null;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.reset();
  }

  onClear() {
    this.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
