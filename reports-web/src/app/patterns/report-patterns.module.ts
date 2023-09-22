import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReportPatternsComponent} from './report-patterns.component';
import {ReportPatternsRoutingModule} from "./report-patterns-routing.module";
import { ReportPatternParametersComponent } from './report-pattern-parameters/report-pattern-parameters.component';


@NgModule({
  declarations: [
    ReportPatternsComponent,
    ReportPatternParametersComponent
  ],
  imports: [
    CommonModule,
    ReportPatternsRoutingModule,
    SharedModule
  ]
})
export class ReportPatternsModule { }
