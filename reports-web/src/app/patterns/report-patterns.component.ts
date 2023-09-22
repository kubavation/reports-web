import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, filter, map, Subject, switchMap, tap} from "rxjs";
import {Subsystem} from "../shared/modules/model/subsystem";
import {ReportPatternsService} from "./service/report-patterns.service";
import {ModulesService} from "../shared/modules/service/modules.service";
import {MatTableDataSource} from "@angular/material/table";
import {ReportPattern} from "./model/report-pattern";
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UploadFilePatternModalComponent} from "./modal/upload-file-pattern-modal/upload-file-pattern-modal.component";

@Component({
  selector: 'app-report-patterns',
  templateUrl: './report-patterns.component.html',
  styleUrls: ['./report-patterns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternsComponent implements AfterViewInit {

  private subsystemSubject = new BehaviorSubject<Subsystem>(null);
  private selectedPatternSubject = new BehaviorSubject<ReportPattern>(null);

  subsystemControl = new FormControl<Subsystem>(null);

  modules$ = this.modulesService.modules$;

  reportPatterns$ = this.subsystemSubject.pipe(
    filter(subsystem => !!subsystem),
    switchMap(({name}) => this.reportPatternsService.reportPatterns(name))
  )

  reportPatternParameters$ = this.selectedPatternSubject
    .pipe(
      filter(pattern => !!pattern),
      switchMap(({id}) => this.reportPatternsService.reportPatternParameters(id))
    )

  dataSource$ = this.subsystemControl.valueChanges.pipe(
    filter(subsystem => !!subsystem),
    switchMap(({name}) => this.reportPatternsService.reportPatterns(name)),
    map(patterns => new MatTableDataSource<ReportPattern>(patterns))
  )


  readonly columns = ['name', 'description', 'fileName', 'subsystem'];

  constructor(private reportPatternsService: ReportPatternsService,
              private modulesService: ModulesService,
              private _dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.subsystemControl.markAsTouched();
  }

  onSelection(pattern: ReportPattern): void {
    this.selectedPatternSubject.next(pattern);
  }

  get selected(): ReportPattern {
    return this.selectedPatternSubject.getValue();
  }

  openUploadDialog(): void   {
    this._dialog.open(UploadFilePatternModalComponent, {
      width: '50%',
      height: '40%'
    }).afterClosed()
      .pipe(
        switchMap(file => this.reportPatternsService.uploadPatternFile(this.selectedPatternSubject.value?.id, file))
      )
      .subscribe();
  }
}
