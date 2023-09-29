import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReportsComponent} from './reports.component';
import {GenerateReportModalComponent} from "./modal/generate-report-modal/generate-report-modal.component";
import {ReportGenerationRoutingModule} from "./report-generation-routing.module";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import { ScheduledReportsComponent } from './components/scheduled-reports/scheduled-reports.component';
import { ScheduleAtModalComponent } from './components/modal/schedule-at-modal/schedule-at-modal.component';
import { ScheduledReportStatusComponent } from './components/scheduled-reports/scheduled-report-status/scheduled-report-status.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    ReportsComponent,
    GenerateReportModalComponent,
    ScheduledReportsComponent,
    ScheduleAtModalComponent,
    ScheduledReportStatusComponent
  ],
    imports: [
      CommonModule,
      ReportGenerationRoutingModule,
      SharedModule,
      NgxExtendedPdfViewerModule
    ]
})
export class ReportGenerationModule { }
