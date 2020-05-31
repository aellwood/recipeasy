import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-name",
  templateUrl: "./recipe-name.component.html",
  styleUrls: ["./recipe-name.component.scss"],
})
export class RecipeNameComponent implements OnInit {
  @Input() recipeName: string;

  constructor() {}

  ngOnInit(): void {}
}
