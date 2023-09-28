import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormResponse} from "./form-response";
import {ParameterType} from "../../model/parameter-type";
import {MatStepper} from "@angular/material/stepper";
import {GenerationType} from "../../model/generation-type";

@Component({
  selector: 'app-report-pattern-modal',
  templateUrl: './report-pattern-modal.component.html',
  styleUrls: ['./report-pattern-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternModalComponent {

  @ViewChild('stepper') _stepper: MatStepper;

  generationTypes = Object.keys(GenerationType);

  _form = this.fb.group({
    basicData: this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      generationType: [null, Validators.required]
    }),
    filePattern: this.fb.group({
      parameters: this.fb.array([])
    })
  })

  private _file: File;
  readonly requiredType = '.jrxml';

  readonly parameterTypes = Object.keys(ParameterType);

  constructor(public dialogRef: MatDialogRef<ReportPatternModalComponent>,
              private fb: FormBuilder) { }


  save(): void {

    if (this.selectedIndex === 0) {
      this._stepper.next();
      return;
    }

    const response: FormResponse = {
      name: this.basicData.get('name').value,
      description: this.basicData.get('description').value,
      generationType: this.basicData.get('generationType').value,
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
    return this.filePattern.get('parameters') as FormArray;
  }

  get basicData(): FormGroup {
    return this._form.get('basicData') as FormGroup;
  }

  get filePattern(): FormGroup {
    return this._form.get('filePattern') as FormGroup;
  }

  get buttonMsg(): string {
    if (this.selectedIndex === 0) {
      return 'Next';
    }
    return 'Save';
  }

  get selectedIndex(): number {
    return this._stepper?.selectedIndex ?? 0;
  }

  back(): void {
    this._stepper?.previous();
  }

  get matStepDisabled(): boolean {
    if (this.selectedIndex == 0) {
      return !this.basicData.valid;
    }
    return !this.filePattern.valid || !this._file;
  }

  deleteFile(): void {
    this._file = null;
  }
}
