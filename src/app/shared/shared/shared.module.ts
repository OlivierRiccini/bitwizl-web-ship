import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class SharedModule { }
