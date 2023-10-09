import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fullStack } from 'src/app/shared/interfaces/interface';
import { environment } from 'src/environments/environment';
import { FormsComponent } from '../forms/forms.component';
import { MatConfirmDeleteComponent } from '../mat-confirm-delete/mat-confirm-delete.component';
import { KeepTableService } from '../shared/services/keep-table.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  public url : string = environment.URL;
  public data:any;
  public displayTable: boolean = false;
  public body:string='';
  constructor(private http:HttpClient,private dialog:MatDialog,private keepTableService : KeepTableService){
    this.body=`
    When considering the review process for my website in the context of university applications, it is
    prudent to ensure a seamless and efficient experience for the reviewers. To facilitate this, I have
    opted not to implement a login and signup feature directly on my website. However, I do possess a
    well-established approach for implementing such functionality in other projects, which I would like to
    share for reference. In my implementation, I adhere to established web development practices:
    `
  }
  ngOnInit():void{
    this.onGetData();
    if(this.keepTableService.getDisplay() === false){
      this.displayTable=false;
    }
    else if(this.keepTableService.getDisplay() === true){
      this.displayTable=true;
    }
  }

  private onGetData():void{
    this.http.get<fullStack>(this.url+"/api/details/read").subscribe((res:fullStack)=>{
      this.data=res;
    });
  }

  public onAddData():void{
    let afterClosed=this.dialog.open(FormsComponent,{
      width: "40%",
      height: "80%",
      data:{
        checker:false,
        message: null
      }
    });
    afterClosed.afterClosed().subscribe(()=>{this.onGetData();});
  }
  public onEditData(data:fullStack):void{
    let afterClosed=this.dialog.open(FormsComponent,{
      width: "40%",
      height: "80%",
      data:{
        checker:true,
        message: data
      }
    });
    afterClosed.afterClosed().subscribe(()=>{this.onGetData();});
  }
  public onDeleteData(data:fullStack):void{
    let deleteOrNot = this.dialog.open(MatConfirmDeleteComponent,{width:'390px'});
    deleteOrNot.afterClosed().subscribe(res=>{
      if(res){
        this.http.delete<fullStack>(this.url+"/api/details/delete/"+data._id?.toString()).subscribe(()=>{
          this.onGetData();
        });
      }
    });
  }
  public displayTableFunction(){
    this.displayTable = true;
  }

}
