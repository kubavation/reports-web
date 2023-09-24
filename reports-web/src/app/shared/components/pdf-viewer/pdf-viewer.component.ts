import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {

  blob: Blob;

  constructor(public dialogRef: MatDialogRef<PdfViewerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.blob = data.blob;
  }


}
