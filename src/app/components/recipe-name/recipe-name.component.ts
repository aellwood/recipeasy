import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-name",
  templateUrl: "./recipe-name.component.html",
  styleUrls: ["./recipe-name.component.scss"],
})
export class RecipeNameComponent implements OnInit {
  @Input() recipeId: string;
  @Input() recipeName: string;
  @Input() selectedRecipeId: string;
  @Output() updateSelectedRecipe = new EventEmitter<string>();

  updateSelected() {
    this.updateSelectedRecipe.emit(this.recipeId);
  }

  constructor() {}

  ngOnInit(): void {}
}
