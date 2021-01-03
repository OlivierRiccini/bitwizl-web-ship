import { Component, OnInit } from '@angular/core';
import { BENEFITS } from 'src/app/config/benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  public benefits = BENEFITS;

  constructor() { }

  ngOnInit(): void {
  }

}
