import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ShipIntroComponent } from './components/ship-intro/ship-intro.component';
import { CourierIntroComponent } from './components/courier-intro/courier-intro.component';



@NgModule({
  declarations: [HomeComponent, LandingComponent, ShipIntroComponent, CourierIntroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
