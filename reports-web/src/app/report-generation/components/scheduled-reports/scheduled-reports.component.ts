import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-scheduled-reports',
  templateUrl: './scheduled-reports.component.html',
  styleUrls: ['./scheduled-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduledReportsComponent {

  constructor() { }

}
