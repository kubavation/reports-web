import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ModulesService} from "../../../shared/modules/service/modules.service";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {filter, switchMap, tap} from "rxjs";
import {ReportPatternsService} from "../../../patterns/service/report-patterns.service";
import {Subsystem} from "../../../shared/modules/model/subsystem";
import {ReportPattern} from "../../../patterns/model/report-pattern";
import {ReportPatternParameter} from "../../../patterns/model/report-pattern-parameter";

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
      tap(parameters => parameters.forEach(parameter => this.pushParameter(parameter)))
    )


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

  pushParameter(parameter: ReportPatternParameter): void {

    const parameterFormGroup = this.fb.group({
      name: [{value: parameter.name, disabled: true}, Validators.required],
      value: [null, Validators.required]
    })

    this.parameters.push(parameterFormGroup);
  }


}
