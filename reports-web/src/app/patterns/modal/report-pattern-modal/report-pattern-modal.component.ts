import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {AddReportPattern} from "../../model/add-report-pattern";
import {FormResponse} from "./form-response";
import {ParameterType} from "../../model/parameter-type";
import {ReportPatternParameter} from "../../model/report-pattern-parameter";

@Component({
  selector: 'app-report-pattern-modal',
  templateUrl: './report-pattern-modal.component.html',
  styleUrls: ['./report-pattern-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternModalComponent {

  form = this.fb.group({
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
    parameters: this.fb.array([])
  })

  private _file: File;
  readonly requiredType = '.jrxml';

  readonly parameterTypes = Object.keys(ParameterType);

  constructor(public dialogRef: MatDialogRef<ReportPatternModalComponent>,
              private fb: FormBuilder) { }


  save(): void {

    const response: FormResponse = {
      name: this.form.get('name').value,
      description: this.form.get('description').value,
      file: this._file,
      parameters: this.parameters.controls.map(control => ({name: control.value.name, type: control.value.type}))
    };

    this.dialogRef.close(response);
  }

  onFileSelected(event: any): void {
    this._file = event.target.files[0];
  }

  get fileName(): string {
    return this._file?.name ?? null;
  }


  addParameter(): void {

    const parameterFormGroup = this.fb.group({
      name: ['', Validators.required],
      type: [null, Validators.required]
    })

    this.parameters.push(parameterFormGroup);
  }

  deleteParameter(index: number): void {
    this.parameters.removeAt(index);
  }

  get parameters(): FormArray {
    return this.form.get('parameters') as FormArray;
  }

}
