import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
