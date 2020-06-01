import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { RecipeManagerComponent } from "./components/recipe-manager/recipe-manager.component";
import { AddRecipeComponent } from "./components/add-recipe/add-recipe.component";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HeaderComponent } from "./components/header/header.component";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { HomeComponent } from "./components/home/home.component";
import { RecipeNameComponent } from "./components/recipe-name/recipe-name.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    RecipeManagerComponent,
    AddRecipeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    RecipeNameComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
