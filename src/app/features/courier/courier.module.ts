import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourierRoutingModule } from './courier-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourierComponent } from './pages/courier/courier.component';



@NgModule({
  declarations: [CourierComponent],
  imports: [
    CommonModule,
    CourierRoutingModule,
    SharedModule
  ]
})
export class CourierModule { }
