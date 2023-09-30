import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Subsystem} from "../model/subsystem";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  modules$ = this.http.get<Subsystem[]>(`${environment.url}/module-service/api/modules`);

  constructor(private http: HttpClient) {
  }

}
