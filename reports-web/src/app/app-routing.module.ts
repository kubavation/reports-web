import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./keycloak/guards/auth.guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'report-patterns', loadChildren: () => import('./patterns/report-patterns.module').then(m => m.ReportPatternsModule), canActivate: [AuthGuard] },
  { path: 'reports', loadChildren: () => import('./report-generation/report-generation-routing.module').then(m => m.ReportGenerationRoutingModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
