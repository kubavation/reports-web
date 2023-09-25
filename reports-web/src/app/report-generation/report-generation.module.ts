import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReportsComponent} from './reports.component';
import {GenerateReportModalComponent} from "./modal/generate-report-modal/generate-report-modal.component";
import {ReportGenerationRoutingModule} from "./report-generation-routing.module";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import { ScheduledReportsComponent } from './components/scheduled-reports/scheduled-reports.component';


@NgModule({
  declarations: [
    ReportsComponent,
    GenerateReportModalComponent,
    ScheduledReportsComponent
  ],
    imports: [
        CommonModule,
        ReportGenerationRoutingModule,
        SharedModule,
        NgxExtendedPdfViewerModule
    ]
})
export class ReportGenerationModule { }
