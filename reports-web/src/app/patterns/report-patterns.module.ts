import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReportPatternsComponent} from './report-patterns.component';
import {ReportPatternsRoutingModule} from "./report-patterns-routing.module";
import { ReportPatternParametersComponent } from './report-pattern-parameters/report-pattern-parameters.component';
import { UploadFilePatternModalComponent } from './modal/upload-file-pattern-modal/upload-file-pattern-modal.component';
import { ReportPatternModalComponent } from './modal/report-pattern-modal/report-pattern-modal.component';


@NgModule({
  declarations: [
    ReportPatternsComponent,
    ReportPatternParametersComponent,
    UploadFilePatternModalComponent,
    ReportPatternModalComponent
  ],
  imports: [
    CommonModule,
    ReportPatternsRoutingModule,
    SharedModule
  ]
})
export class ReportPatternsModule { }
