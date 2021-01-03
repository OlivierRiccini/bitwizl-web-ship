import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipperComponent } from './pages/shipper/shipper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipperRoutingModule } from './shipper-routing.module';



@NgModule({
  declarations: [ShipperComponent],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    SharedModule
  ]
})
export class ShipperModule { }
