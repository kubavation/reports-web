import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SchedulingStatus} from "../model/scheduling-status";

@Component({
  selector: 'app-scheduled-report-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container [ngSwitch]=status>
         <div>
           <mat-icon *ngSwitchCase=statusType.SUCCESS>done</mat-icon>
           <mat-icon *ngSwitchCase=statusType.FAILURE>cancel</mat-icon>
           <mat-icon *ngSwitchCase=statusType.IN_PROGRESS>access_time</mat-icon>
             {{status}}
         </div>
    </ng-container>`
})
export class ScheduledReportStatusComponent {

  @Input() status: SchedulingStatus;

  readonly statusType = SchedulingStatus;

  constructor() { }


}
