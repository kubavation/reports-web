import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReportPattern} from "../model/report-pattern";
import {environment} from "../../../environments/environment";
import {ReportPatternParameter} from "../model/report-pattern-parameter";
import {AddReportPattern} from "../model/add-report-pattern";

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

  public addReportPattern(pattern: AddReportPattern, file: File): Observable<void> {

    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append("pattern", new Blob([JSON.stringify(pattern)], {
      type: 'application/json',
    }));

    return this.http.post<void>(`${environment.url}/reports-service/report-patterns`, formData);
  }

  public uploadPatternFile(patternId: number, file: any): Observable<void> {

    const formData = new FormData();
    formData.append('file', file);

    return this.http.patch<void>(`${environment.url}/reports-service/report-patterns/${patternId}/files`, formData);
  }

  public downloadPatternParameters(patternId: number): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(`${environment.url}/reports-service/report-patterns/${patternId}/files`,
 {
          observe: 'response',
          responseType: 'blob' as 'json'
        });
  }

}
