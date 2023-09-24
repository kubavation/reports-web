import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FileData} from "../model/file-data";
import {filter} from "rxjs";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {

  fileData: FileData;

  constructor(public dialogRef: MatDialogRef<PdfViewerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fileData = data.fileData;
  }


  download() {
    this.dialogRef.close(this.fileData);
  }
}
