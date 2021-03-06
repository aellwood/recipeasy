import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "src/app/models/recipe";
import { ApiService } from "src/app/services/api/api.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  loading = false;
  @Output() recipeDeleted = new EventEmitter<Recipe>();

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  async deleteRecipe() {
    this.loading = true;
    this.api.deleteRecipe(this.recipe.recipeId).subscribe((res) => {
      this.loading = false;
      this.recipeDeleted.emit(this.recipe);
    });
  }
}
