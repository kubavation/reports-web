import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GenerateReportModalComponent} from "./modal/generate-report-modal/generate-report-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {filter, Observable, switchMap} from "rxjs";
import {ReportGeneration} from "./model/report-generation";
import {ReportsService} from "./service/reports.service";
import {PdfViewerComponent} from "../shared/components/pdf-viewer/pdf-viewer.component";
import {HttpResponse} from "@angular/common/http";
import {FileData} from "../shared/components/model/file-data";
import {FileUtil} from "../shared/util/file-util";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent {

  constructor(private dialog: MatDialog,
              private reportsService: ReportsService) { }

  openGenerationReportModal(): void {
    this.dialog.open(GenerateReportModalComponent, {
      width: '50%',
      height: '80%'
    }).afterClosed()
      .pipe(
        filter(response => !!response),
        switchMap((response: ReportGeneration) => this.reportsService.generate(response)),
        switchMap((response: HttpResponse<Blob>) => this.showPdfViewerDialog({
          blob: response.body,
          fileName: FileUtil.fileNameFromHeader(response)}
        ))
      )
      .subscribe(response => {
        //saveAs(response.body, FileUtil.fileNameFromHeader(response))
      });
  }


  private showPdfViewerDialog(fileData: FileData): Observable<FileData> {
    return this.dialog.open(PdfViewerComponent, {
      width: '80%',
      height: '90%',
      data: {
        fileData: fileData
      }
    })
      .afterClosed();
  }

}
