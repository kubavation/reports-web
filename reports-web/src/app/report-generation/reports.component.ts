import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GenerateReportModalComponent} from "./modal/generate-report-modal/generate-report-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent {

  constructor(private dialog: MatDialog) { }

  openGenerationReportModal(): void {
    this.dialog.open(GenerateReportModalComponent, {
      width: '50%',
      height: '80%'
    }).afterClosed()
      .pipe(
      )
      .subscribe(res => console.log(res));
  }
}
