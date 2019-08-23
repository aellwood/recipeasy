import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipeName: string;
  @Input() ingredients: Array<string>;
  @Input() notes: string;

  constructor() {}

  ngOnInit() {}
}
