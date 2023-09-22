import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReportPattern} from "../model/report-pattern";
import {environment} from "../../../environments/environment";
import {ReportPatternParameter} from "../model/report-pattern-parameter";

@Injectable({
  providedIn: 'root'
})
export class ReportPatternsService {

  constructor(private http: HttpClient) {

  }

  public reportPatterns(subsystem: string): Observable<ReportPattern[]> {
    return this.http.get<ReportPattern[]>(`${environment.url}/reports-service/report-patterns/subsystem/${subsystem}`);
  }

  public reportPatternParameters(patternId: number): Observable<ReportPatternParameter[]> {
    return this.http.get<ReportPatternParameter[]>(`${environment.url}/reports-service/report-patterns/${patternId}/parameters`);
  }

}
