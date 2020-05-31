import { Ingredient } from "./ingredient";

export interface Recipe {
  recipeId: string;
  recipeName: string;
  ingredients: Ingredient[];
  notes: string;
}
