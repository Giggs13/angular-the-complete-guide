import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../../recipes/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  readonly url = 'https://angular-ng-course-project.firebaseio.com/';

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes(): Observable<Recipe[]> {
    return this.httpClient.put<Recipe[]>(this.url + 'recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes(): void {
    const httpHeaders = new HttpHeaders({'Accept': 'application/json'});
    this.httpClient.get<Recipe[]>(this.url + 'recipes.json', {headers: httpHeaders})
      .pipe(map((recipes: Recipe[]) => {
        recipes.forEach((recipe: Recipe) => {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        });
        return recipes;
      }))
      .subscribe((recipes: Recipe[]) => {
        console.log(recipes);
          this.recipeService.updateRecipes(recipes);
        },
        error => console.log(error)
      );
  }
}
