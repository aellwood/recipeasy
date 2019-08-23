import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  responseJson: string;
  sub: Subscription;
  showAddRecipe: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.sub = this.api
      .getRecipes()
      .subscribe(res => (this.responseJson = res));
  }
}
