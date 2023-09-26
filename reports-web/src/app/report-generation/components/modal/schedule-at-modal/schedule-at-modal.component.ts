import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-schedule-at-modal',
  templateUrl: './schedule-at-modal.component.html',
  styleUrls: ['./schedule-at-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleAtModalComponent{

  form = this.fb.group({
    at: [null, Validators.required]
  })


  constructor(public dialogRef: MatDialogRef<ScheduleAtModalComponent>,
              private fb: FormBuilder) {
  }


  save(): void {
    this.dialogRef.close(this.form.get('at').value);
  }


}
