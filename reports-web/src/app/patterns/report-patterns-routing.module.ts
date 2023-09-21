import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportPatternsComponent} from "./report-patterns.component";

const routes: Routes = [
  { path: '', component: ReportPatternsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportPatternsRoutingModule { }
