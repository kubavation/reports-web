import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ModulesService} from "../../../shared/modules/service/modules.service";
import {FormBuilder, Validators} from "@angular/forms";
import {filter, switchMap} from "rxjs";
import {ReportPatternsService} from "../../../patterns/service/report-patterns.service";
import {Subsystem} from "../../../shared/modules/model/subsystem";

@Component({
  selector: 'app-generate-report-modal',
  templateUrl: './generate-report-modal.component.html',
  styleUrls: ['./generate-report-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateReportModalComponent {

  form = this.fb.group({
    subsystem: [null, Validators.required],
    pattern: [null, Validators.required]
  })

  modules$ = this.modulesService.modules$;

  patterns$ = this.form.get('subsystem').valueChanges
    .pipe(
      filter(subsystem => !!subsystem),
      switchMap((subsystem: Subsystem) => this.reportPatternsService.reportPatterns(subsystem.name))
    )



  constructor(public dialogRef: MatDialogRef<GenerateReportModalComponent>,
              private fb: FormBuilder,
              private modulesService: ModulesService,
              private reportPatternsService: ReportPatternsService) {

  }


  generate(): void {

  }
}
