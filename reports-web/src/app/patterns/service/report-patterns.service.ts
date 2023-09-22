import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReportPattern} from "../model/report-pattern";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReportPatternsService {

  constructor(private http: HttpClient) {

  }

  public reportPatterns(subsystem: string): Observable<ReportPattern[]> {
    return this.http.get<ReportPattern[]>(`${environment.url}/reports-service/report-patterns/subsystem/${subsystem}`);
  }

}
