import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./keycloak/guards/auth.guard";

const routes: Routes = [
  { path: 'report-patterns', loadChildren: () => import('./patterns/report-patterns.module').then(m => m.ReportPatternsModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
