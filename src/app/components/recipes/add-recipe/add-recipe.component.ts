import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.form = this.fb.group({
      recipeName: '',
      ingredients: this.fb.array([]),
      notes: ''
    });
  }

  get ingredientForms() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredient = this.fb.group({
      ingredient: []
    });

    this.ingredientForms.push(ingredient);
  }

  deleteIngredient(i) {
    this.ingredientForms.removeAt(i);
  }

  async submitHandler() {
    this.api.postRecipe(this.form.value).subscribe(res => console.log('yay'));
  }
}
