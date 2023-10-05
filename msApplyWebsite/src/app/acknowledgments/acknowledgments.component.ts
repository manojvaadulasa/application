import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-acknowledgments',
  templateUrl: './acknowledgments.component.html',
  styleUrls: ['./acknowledgments.component.scss']
})
export class AcknowledgmentsComponent implements OnInit {

  public body : string;
  public backend : string;
  constructor(private snackBar:MatSnackBar) {
    this.body=`
    I have used frontend Angular, backend NodeJS and MongoDB database for this project and I have deployed it using Vercel.
    Some of the advanced functions I have used in the frontend include the use of:-
    `
    this.backend=`
    I haven't used any advanced security concepts in the backend apart from an access key. But I have created
    REST API's for usage in this website.
    `
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.showSnackBar();
  }

  private showSnackBar():void{
    this.snackBar.open('This is an Angular Lazy loaded module','',{
      duration: 3000,
      horizontalPosition:'right',
      verticalPosition:'bottom',
      panelClass: 'green-snackbar'
    });
  }

  goToFirstProject(){
    window.open("https://youtube.com/shorts/00VL4dNOPmo?si=CDlgr5c50ajewojm","_blank")
  }

  goToSecondProject(){
    window.open("https://youtu.be/gwzaCs8uyLk?si=feZ38ex58MhkSdsu","_blank");
  }

}
