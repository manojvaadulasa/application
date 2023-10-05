import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-delete',
  templateUrl: './mat-confirm-delete.component.html',
  styleUrls: ['./mat-confirm-delete.component.scss']
})
export class MatConfirmDeleteComponent {

  constructor(public dialogRef: MatDialogRef<MatConfirmDeleteComponent>) { }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
