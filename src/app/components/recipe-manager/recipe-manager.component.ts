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
  showAddRecipe: boolean = false;
  sub: Subscription;
  selectedRecipe: Recipe;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.sub = this.api.getRecipes().subscribe((res: Recipe[]) => {
      this.recipes = res;
    });
  }

  recipeAdded() {
    this.getRecipes();
    this.showAddRecipe = !this.showAddRecipe;
  }

  setSelectedRecipeId(id: string) {
    this.selectedRecipe = this.recipes.find((x) => x.recipeId === id);
  }
}
