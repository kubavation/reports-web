import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-upload-file-pattern-modal',
  templateUrl: './upload-file-pattern-modal.component.html',
  styleUrls: ['./upload-file-pattern-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFilePatternModalComponent{

  constructor(public dialogRef: MatDialogRef<UploadFilePatternModalComponent>) {}


  onFileSelected(file: Event) {

  }
}
