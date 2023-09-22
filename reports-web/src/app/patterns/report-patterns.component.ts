import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, filter, Subject, switchMap, tap} from "rxjs";
import {Subsystem} from "../shared/modules/model/subsystem";
import {ReportPatternsService} from "./service/report-patterns.service";
import {ModulesService} from "../shared/modules/service/modules.service";

@Component({
  selector: 'app-report-patterns',
  templateUrl: './report-patterns.component.html',
  styleUrls: ['./report-patterns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternsComponent {

  private subsystemSubject = new BehaviorSubject<Subsystem>(null);

  modules$ = this.modulesService.modules$
    .pipe(
      tap(modules => this.subsystemSubject.next(modules[0]))
    );

  reportPatterns$ = this.subsystemSubject.pipe(
    filter(subsystem => !!subsystem),
    switchMap(({name}) => this.reportPatternsService.reportPatterns(name))
  )

  constructor(private reportPatternsService: ReportPatternsService,
              private modulesService: ModulesService) {
  }

}
