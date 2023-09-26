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
    date: [null, Validators.required],
    time: [null, [Validators.required]]
  })


  constructor(public dialogRef: MatDialogRef<ScheduleAtModalComponent>,
              private fb: FormBuilder) {
  }


  save(): void {
    const date: Date = this.form.get('date').value;
    date.setHours(this.hour(), this.minute())
    this.dialogRef.close(date);
  }


  updateFormDate(event: any) {
    this.form.get('date').setValue(event);
  }

  get minDate(): Date {
    return new Date();
  }

  hour(): number {
    return parseInt((this.form.get('time').value as String).split(':')[0]);
  }

  minute(): number {
    return parseInt((this.form.get('time').value as String).split(':')[1]);
  }

}
