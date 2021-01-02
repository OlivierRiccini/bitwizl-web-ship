import { Component, OnInit } from '@angular/core';
import { NAVIGATION_LINKS } from 'src/app/config/navigation-links';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  public navigationLinks = NAVIGATION_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
