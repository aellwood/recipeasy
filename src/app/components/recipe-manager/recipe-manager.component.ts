import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-manager",
  templateUrl: "./recipe-manager.component.html",
  styleUrls: ["./recipe-manager.component.scss"],
})
export class RecipeManagerComponent implements OnInit {
  responseJson: string;
  showAddRecipe: boolean = false;
  sub: Subscription;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.sub = this.api
      .getRecipes()
      .subscribe((res) => (this.responseJson = res));
  }

  recipeAdded() {
    this.getRecipes();
    this.showAddRecipe = !this.showAddRecipe;
  }
}