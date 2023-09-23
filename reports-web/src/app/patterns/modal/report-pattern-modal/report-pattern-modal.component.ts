import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {AddReportPattern} from "../../model/add-report-pattern";
import {FormResponse} from "./form-response";

@Component({
  selector: 'app-report-pattern-modal',
  templateUrl: './report-pattern-modal.component.html',
  styleUrls: ['./report-pattern-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternModalComponent {

  form = this.fb.group({
    name: [null, [Validators.required]],
    description: [null, [Validators.required]]
  })

  private _file: File;
  readonly requiredType = '.jrxml';

  constructor(public dialogRef: MatDialogRef<ReportPatternModalComponent>,
              private fb: FormBuilder) { }


  save(): void {

    const response: FormResponse = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      file: this._file
    };

    this.dialogRef.close(response);
  }

  onFileSelected(event: any): void {
    this._file = event.target.files[0];
  }

  get fileName(): string {
    return this._file?.name ?? null;
  }
}
