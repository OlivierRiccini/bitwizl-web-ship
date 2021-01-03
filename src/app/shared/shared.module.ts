import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    RouterModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class SharedModule { }
