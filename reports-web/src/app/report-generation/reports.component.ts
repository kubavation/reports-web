import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GenerateReportModalComponent} from "./modal/generate-report-modal/generate-report-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {filter, switchMap} from "rxjs";
import {ReportGeneration} from "./model/report-generation";
import {ReportsService} from "./service/reports.service";
import {saveAs} from "file-saver";
import {FileUtil} from "../shared/util/file-util";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent {

  constructor(private dialog: MatDialog,
              private reportsService: ReportsService) { }

  openGenerationReportModal(): void {
    this.dialog.open(GenerateReportModalComponent, {
      width: '50%',
      height: '80%'
    }).afterClosed()
      .pipe(
        filter(response => !!response),
        switchMap((response: ReportGeneration) => this.reportsService.generate(response))
      )
      .subscribe(response => {
        saveAs(response.body, FileUtil.fileNameFromHeader(response))
      });
  }
}
