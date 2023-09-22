import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReportPatternsComponent} from './report-patterns.component';
import {ReportPatternsRoutingModule} from "./report-patterns-routing.module";


@NgModule({
  declarations: [
    ReportPatternsComponent
  ],
  imports: [
    CommonModule,
    ReportPatternsRoutingModule,
    SharedModule
  ]
})
export class ReportPatternsModule { }
