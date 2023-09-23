import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-generate-report-modal',
  templateUrl: './generate-report-modal.component.html',
  styleUrls: ['./generate-report-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateReportModalComponent {

  constructor(public dialogRef: MatDialogRef<GenerateReportModalComponent>) {

  }


}
