import { Component } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOpen = false;

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes()
      .subscribe((response: Recipe[]) => console.log(response),
        error => console.log(error));
  }

  onFetchData(): void {
    this.dataStorageService.fetchRecipes();
  }
}
