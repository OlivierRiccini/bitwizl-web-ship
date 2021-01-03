import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ship-intro',
  templateUrl: './ship-intro.component.html',
  styleUrls: ['./ship-intro.component.scss', '../landing/landing.component.scss']
})
export class ShipIntroComponent implements OnInit {
  public clientAppUrl = environment.clientAppUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
