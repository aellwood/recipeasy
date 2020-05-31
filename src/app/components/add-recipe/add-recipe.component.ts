import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api/api.service";
import { Recipe } from "src/app/models/recipe";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.scss"],
})
export class AddRecipeComponent implements OnInit {
  @Output() recipeAdded = new EventEmitter<Recipe>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.form = this.fb.group({
      recipeName: ["", [Validators.required]],
      ingredients: this.fb.array([]),
      notes: "",
    });
  }

  get ingredientForms() {
    return this.form.get("ingredients") as FormArray;
  }

  addIngredient() {
    const ingredient = this.fb.group({
      ingredientName: ["", [Validators.required]],
      quantity: ["", [Validators.pattern("^[0-9]*$")]],
    });

    this.ingredientForms.push(ingredient);
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i);
  }

  async submitHandler() {
    this.api
      .postRecipe(this.form.value)
      .subscribe((res: Recipe) => this.recipeAdded.emit(res));
  }
}
