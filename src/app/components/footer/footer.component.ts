import { Component, OnInit } from '@angular/core';
import { NAVIGATION_LINKS } from 'src/app/config/navigation-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public navigationLinks = NAVIGATION_LINKS;
  public currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
