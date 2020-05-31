import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";
import { Subscription } from "rxjs";
import { Recipe } from "src/app/models/recipe";

@Component({
  selector: "app-recipe-manager",
  templateUrl: "./recipe-manager.component.html",
  styleUrls: ["./recipe-manager.component.scss"],
})
export class RecipeManagerComponent implements OnInit {
  recipes: Recipe[] = null;
  sub: Subscription;
  selectedRecipe: Recipe;
  newRecipe = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.sub = this.api.getRecipes().subscribe((res: Recipe[]) => {
      this.recipes = res;
    });
  }

  recipeAdded(recipe: Recipe) {
    this.newRecipe = false;
    this.recipes.push(recipe);
    this.selectedRecipe = recipe;
  }

  setSelectedRecipeId(id: string) {
    this.newRecipe = false;
    this.selectedRecipe = this.recipes.find((x) => x.recipeId === id);
  }

  createNewRecipe() {
    this.selectedRecipe = null;
    this.newRecipe = true;
  }

  recipeDeleted(recipe: Recipe) {
    this.selectedRecipe = null;
    this.recipes = this.recipes.filter((x) => x.recipeId !== recipe.recipeId);
  }
}
