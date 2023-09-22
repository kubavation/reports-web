import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-upload-file-pattern-modal',
  templateUrl: './upload-file-pattern-modal.component.html',
  styleUrls: ['./upload-file-pattern-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFilePatternModalComponent {

  private _file: any;

  readonly requiredType = '.jrxml';

  constructor(public dialogRef: MatDialogRef<UploadFilePatternModalComponent>) {}


  onFileSelected(event: any) {
    this._file = event.target.files[0];
  }


  upload(): void {
    this.dialogRef.close(this._file);
  }

  get fileUploaded(): boolean {
    return this._file != null;
  }
}
