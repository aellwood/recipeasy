import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CallbackComponent } from "./components/callback/callback.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuard } from "./auth-guard/auth.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { ExternalApiComponent } from "./components/external-api/external-api.component";
import { RecipeManagerComponent } from "./components/recipe-manager/recipe-manager.component";

const routes: Routes = [
  {
    path: "callback",
    component: CallbackComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "external-api",
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "recipes",
    component: RecipeManagerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
