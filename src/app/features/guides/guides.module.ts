import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './pages/faq/faq.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { GuidesRoutingModule } from './guides-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [FaqComponent, GetStartedComponent],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    SharedModule
  ]
})
export class GuidesModule { }
