import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./keycloak/guards/auth.guard";
import {AppComponent} from "./app.component";
import {MenuItem} from "./shared/model/menu-item";

export const MENU_ITEMS: MenuItem[] = [
  { url: 'report-patterns', name: 'Report patterns'},
  { url: 'reports', name: 'Reports'}
];

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'report-patterns', loadChildren: () => import('./patterns/report-patterns.module').then(m => m.ReportPatternsModule), canActivate: [AuthGuard] },
  { path: 'reports', loadChildren: () => import('./report-generation/report-generation.module').then(m => m.ReportGenerationModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
