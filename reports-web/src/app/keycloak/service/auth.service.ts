import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

   logout(): Promise<void> {
    return this.keycloakService.logout()
      .then(_ => this.keycloakService.clearToken());
  }
}
