import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get("https://recipeasy-api.herokuapp.com/api/recipes");
  }

  postRecipe(body: any): Observable<any> {
    return this.http.post(
      "https://recipeasy-api.herokuapp.com/api/recipes",
      body
    );
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(
      `https://recipeasy-api.herokuapp.com/api/recipes/${id}`
    );
  }
}
