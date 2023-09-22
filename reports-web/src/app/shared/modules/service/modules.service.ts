import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Subsystem} from "../model/subsystem";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  //modules$ = this.http.get<Subsystem[]>(`${environment.url}/module-service/api/modules`);
  modules$: Observable<Subsystem[]> = of([
    { name: 'COMPANY-MANAGEMENT' },
    { name: 'ACCESS-MANAGEMENT' }
  ])

  constructor(private http: HttpClient) {
  }

}
