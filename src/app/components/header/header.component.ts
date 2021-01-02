import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public sidenav: any;

  constructor() { }

  ngOnInit(): void {
  }

  public onOpenSidebar(): void {
    this.sidenav.open();
  }

}
