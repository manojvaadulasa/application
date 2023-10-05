import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcknowledgmentsComponent } from './acknowledgments.component';

const routes: Routes = [
  {
    path: '',
    component: AcknowledgmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcknowledgmentsRoutingModule { }
