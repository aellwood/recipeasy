import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { RecipeManagerComponent } from "./recipe-manager.component";

describe("RecipesComponent", () => {
  let component: RecipeManagerComponent;
  let fixture: ComponentFixture<RecipeManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeManagerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
