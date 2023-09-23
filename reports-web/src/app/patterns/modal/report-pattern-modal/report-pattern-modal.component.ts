import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-report-pattern-modal',
  templateUrl: './report-pattern-modal.component.html',
  styleUrls: ['./report-pattern-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternModalComponent {

  constructor(public dialogRef: MatDialogRef<ReportPatternModalComponent>,
              private fb: FormBuilder) { }


  save() {
    this.dialogRef.afterClosed();
  }
}
