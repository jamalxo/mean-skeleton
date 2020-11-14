import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./@landing-page/landing-page.component";
import {AuthenticationGuard} from "./@core/service/auth/authentication.guard";
import {OverviewComponent} from "./@overview/overview.component";

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'overview', component: OverviewComponent, canActivate: [AuthenticationGuard]},
  { path: '**', redirectTo: '/landing-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
