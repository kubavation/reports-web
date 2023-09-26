import {Component} from '@angular/core';
import {LoadingService} from "../service/loading.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-loader',
  template: "<div class='spinner-container' *ngIf='loading | async'><mat-spinner ></mat-spinner></div>",
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  constructor(private loadingService: LoadingService) { }


  public get loading(): Observable<boolean> {
    return this.loadingService.loading$;
  }

}
