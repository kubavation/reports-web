import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { ReportsComponent } from './reports.component';



@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReportGenerationModule { }
