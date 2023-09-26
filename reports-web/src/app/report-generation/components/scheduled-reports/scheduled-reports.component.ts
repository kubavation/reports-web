import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GenerateReportModalComponent} from "../../modal/generate-report-modal/generate-report-modal.component";
import {filter, map, Observable, switchMap} from "rxjs";
import {ReportGeneration} from "../../model/report-generation";
import {ReportsService} from "../../service/reports.service";
import {ScheduleReportGeneration} from "../../model/schedule-report-generation";
import {ScheduleAtModalComponent} from "../modal/schedule-at-modal/schedule-at-modal.component";

@Component({
  selector: 'app-scheduled-reports',
  templateUrl: './scheduled-reports.component.html',
  styleUrls: ['./scheduled-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduledReportsComponent {

  constructor(private dialog: MatDialog,
              private reportsService: ReportsService) { }

  openScheduleReportGeneration(): void {
    this.dialog.open(GenerateReportModalComponent, {
      width: '50%',
      height: '80%'
    }).afterClosed()
      .pipe(
        filter(response => !!response),
        switchMap(response => this.openScheduleAtDialog()
          .pipe(
            map((dateResponse: Date) => this.toScheduleReportGeneration(response, dateResponse))
          )
        ),
        switchMap((response: ScheduleReportGeneration) => this.reportsService.schedule(response)),
      )
      .subscribe(_ => {
        console.log(_)
      });
  }

  private openScheduleAtDialog(): Observable<Date> {
    return this.dialog.open(ScheduleAtModalComponent, {
      width: '50%',
      height: '80%'
    }).afterClosed()
      .pipe(
        filter(response => !!response)
      );
  }

  private toScheduleReportGeneration(report: ReportGeneration, at: Date): ScheduleReportGeneration {
    return {
      ...report,
      at
    }
  }

}
