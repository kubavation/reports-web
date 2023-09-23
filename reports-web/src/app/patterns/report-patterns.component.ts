import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, combineLatest, filter, map, of, Subject, switchMap, tap} from "rxjs";
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
  private refreshSubject = new BehaviorSubject<void>(null);

  subsystemControl = new FormControl<Subsystem>(null);

  modules$ = this.modulesService.modules$;

  reportPatternParameters$ = this.selectedPatternSubject
    .pipe(
      switchMap((pattern) => pattern ? this.reportPatternsService.reportPatternParameters(pattern.id): of([]))
    )

  dataSource$ = combineLatest([this.subsystemControl.valueChanges, this.refreshSubject]).pipe(
    map(([subsystem, _]) => subsystem),
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
        filter(result => !!result),
        switchMap(file => this.reportPatternsService.uploadPatternFile(this.selectedPatternSubject.value?.id, file))
      )
      .subscribe(_ => {
        this.refreshSubject.next();
      });
  }

  downloadFilePattern(): void {
    console.log('todo');
  }
}
