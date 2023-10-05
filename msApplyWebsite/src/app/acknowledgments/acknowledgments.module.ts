import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AcknowledgmentsRoutingModule } from './acknowledgments-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcknowledgmentsRoutingModule,
    MatSnackBarModule
  ]
})
export class AcknowledgmentsModule { }
