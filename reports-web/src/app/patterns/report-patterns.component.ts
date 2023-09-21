import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject, filter, switchMap} from "rxjs";
import {Subsystem} from "../shared/model/subsystem";
import {ReportPatternsService} from "./service/report-patterns.service";

@Component({
  selector: 'app-report-patterns',
  templateUrl: './report-patterns.component.html',
  styleUrls: ['./report-patterns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternsComponent {

  private subsystemSubject = new BehaviorSubject<Subsystem>(null);

  reportPatterns$ = this.subsystemSubject.pipe(
    filter(subsystem => !!subsystem),
    switchMap(({name}) => this.reportPatternsService.reportPatterns(name))
  )

  constructor(private reportPatternsService: ReportPatternsService) {
  }

}
