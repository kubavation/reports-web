import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {of} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {MENU_ITEMS} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild(MatSidenav) _sidenav: MatSidenav;

  menuOptions$ = of(MENU_ITEMS);

  constructor(public router: Router) {}


  ngAfterViewInit(): void {
    this._sidenav.open()
  }


}
