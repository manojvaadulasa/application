import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fullStack } from 'src/app/shared/interfaces/interface';
import { environment } from 'src/environments/environment';
import { FormsComponent } from '../forms/forms.component';
import { MatConfirmDeleteComponent } from '../mat-confirm-delete/mat-confirm-delete.component';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  public url : string = environment.URL;
  public data:any;
  constructor(private http:HttpClient,private dialog:MatDialog){}
  ngOnInit():void{
    this.onGetData();
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

}
