import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, filter, map, Subject, switchMap, tap} from "rxjs";
import {Subsystem} from "../shared/modules/model/subsystem";
import {ReportPatternsService} from "./service/report-patterns.service";
import {ModulesService} from "../shared/modules/service/modules.service";
import {MatTableDataSource} from "@angular/material/table";
import {ReportPattern} from "./model/report-pattern";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-report-patterns',
  templateUrl: './report-patterns.component.html',
  styleUrls: ['./report-patterns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternsComponent implements AfterViewInit {

  private subsystemSubject = new BehaviorSubject<Subsystem>(null);

  subsystemControl = new FormControl<Subsystem>(null);

  modules$ = this.modulesService.modules$;

  reportPatterns$ = this.subsystemSubject.pipe(
    filter(subsystem => !!subsystem),
    switchMap(({name}) => this.reportPatternsService.reportPatterns(name))
  )

  dataSource$ = this.subsystemControl.valueChanges.pipe(
    filter(subsystem => !!subsystem),
    switchMap(({name}) => this.reportPatternsService.reportPatterns(name)),
    map(patterns => new MatTableDataSource<ReportPattern>(patterns))
  )


  readonly columns = ['name', 'description', 'subsystem'];

  constructor(private reportPatternsService: ReportPatternsService,
              private modulesService: ModulesService) {
  }

  ngAfterViewInit() {
    this.subsystemControl.markAsTouched();

  }


}
