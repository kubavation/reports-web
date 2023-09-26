import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ReportGeneration} from "../model/report-generation";
import {ScheduleReportGeneration} from "../model/schedule-report-generation";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) {
  }

  public generate(report: ReportGeneration): Observable<HttpResponse<Blob>> {
    return this.http.post<Blob>(`${environment.url}/reports-service/api/generation`, report, {
      observe: 'response',
      responseType: 'blob' as 'json'
    });
  }

  public schedule(report: ScheduleReportGeneration): Observable<void> {
    return this.http.post<void>(`${environment.url}/reports-service/api/scheduling`, report);
  }

}
