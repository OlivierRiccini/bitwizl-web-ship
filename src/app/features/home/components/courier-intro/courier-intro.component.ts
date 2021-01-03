import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courier-intro',
  templateUrl: './courier-intro.component.html',
  styleUrls: ['./courier-intro.component.scss', '../landing/landing.component.scss']
})
export class CourierIntroComponent implements OnInit {
  public courierAppUrl = environment.courierAppUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
