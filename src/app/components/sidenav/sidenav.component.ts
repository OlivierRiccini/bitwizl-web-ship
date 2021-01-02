import { Component, Input, OnInit } from '@angular/core';
import { NAVIGATION_LINKS } from 'src/app/config/navigation-links';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public sidenav: any;
  public navigationLinks = NAVIGATION_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

  public onCloseSidenav(): void {
    this.sidenav.close();
  }

}
