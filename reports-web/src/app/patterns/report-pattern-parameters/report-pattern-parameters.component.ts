import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReportPatternParameter} from "../model/report-pattern-parameter";
import {DataSource} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-report-pattern-parameters',
  templateUrl: './report-pattern-parameters.component.html',
  styleUrls: ['./report-pattern-parameters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPatternParametersComponent {


  @Input() set parameters(params: ReportPatternParameter[]) {
    this._dataSource = new MatTableDataSource<ReportPatternParameter>(params);
  }

  _dataSource: DataSource<ReportPatternParameter>;

  readonly columns = ['name', 'type'];

  constructor() { }
}
