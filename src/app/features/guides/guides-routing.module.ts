import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'get-started', component: GetStartedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
