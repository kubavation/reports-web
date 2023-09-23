import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReportsComponent} from './reports.component';
import {GenerateReportModalComponent} from "./modal/generate-report-modal/generate-report-modal.component";
import {ReportGenerationRoutingModule} from "./report-generation-routing.module";
import { ReportsServiceComponent } from './service/reports-service/reports-service.component';


@NgModule({
  declarations: [
    ReportsComponent,
    GenerateReportModalComponent,
    ReportsServiceComponent
  ],
  imports: [
    CommonModule,
    ReportGenerationRoutingModule,
    SharedModule
  ]
})
export class ReportGenerationModule { }
