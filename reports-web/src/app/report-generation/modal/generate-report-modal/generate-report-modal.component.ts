import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ModulesService} from "../../../shared/modules/service/modules.service";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {filter, switchMap, tap} from "rxjs";
import {ReportPatternsService} from "../../../patterns/service/report-patterns.service";
import {Subsystem} from "../../../shared/modules/model/subsystem";
import {ReportPattern} from "../../../patterns/model/report-pattern";
import {ReportPatternParameter} from "../../../patterns/model/report-pattern-parameter";
import {ParameterType} from "../../../patterns/model/parameter-type";

@Component({
  selector: 'app-generate-report-modal',
  templateUrl: './generate-report-modal.component.html',
  styleUrls: ['./generate-report-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateReportModalComponent {

  form = this.fb.group({
    subsystem: [null, Validators.required],
    pattern: [null, Validators.required],
    parameters: this.fb.array([])
  })

  modules$ = this.modulesService.modules$;

  patterns$ = this.form.get('subsystem').valueChanges
    .pipe(
      filter(subsystem => !!subsystem),
      switchMap((subsystem: Subsystem) => this.reportPatternsService.reportPatterns(subsystem.name))
    )

  parameters$ = this.form.get('pattern').valueChanges
    .pipe(
      filter(pattern => !!pattern),
      switchMap((pattern: ReportPattern) => this.reportPatternsService.reportPatternParameters(pattern.id)),
      tap(parameters => this.pushParameters(parameters))
    )

  readonly parameterType = ParameterType;

  constructor(public dialogRef: MatDialogRef<GenerateReportModalComponent>,
              private fb: FormBuilder,
              private modulesService: ModulesService,
              private reportPatternsService: ReportPatternsService) {

  }


  generate(): void {

  }

  get parameters(): FormArray {
    return this.form.get('parameters') as FormArray;
  }

  private pushParameters(parameters: ReportPatternParameter[]): void {
    this.parameters.clear();
    parameters.forEach(parameter => this.pushParameter(parameter));
  }

  private pushParameter(parameter: ReportPatternParameter): void {

    const parameterFormGroup = this.fb.group({
      name: [parameter.name, Validators.required],
      type: [parameter.type],
      value: [null, Validators.required]
    })

    this.parameters.push(parameterFormGroup);
  }

  getParam(index: number): any {
    return this.parameters.at(index).value;
  }

}
