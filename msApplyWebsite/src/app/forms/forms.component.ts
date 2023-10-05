import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { fullStack, importedData, postData } from 'src/app/shared/interfaces/interface';
import { CrudTableComponent } from '../crud-table/crud-table.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public check:boolean = false;
  public url : string = environment.URL;
  public name : any;
  public gender : any;
  public address : any;
  constructor(public dialogRef:MatDialogRef<CrudTableComponent>,private http: HttpClient,
              @Inject(MAT_DIALOG_DATA)public data:importedData) {}
  ngOnInit() {
    this.formInitializer();
    if(this.data.checker===true){
      this.formSetter();
    }
  }
  formInitializer():void{
    this.name='';
    this.gender='';
    this.address='';
  }
  formSetter():void{
    this.name = this.data.message?.name;
    this.gender= this.data.message?.gender;
    this.address=this.data.message?.address;
  }
  onSubmit():void{
    if(this.data.checker===false){
      const formData : postData = {
        name: this.name,
        gender: this.gender,
        address: this.address
      }
      this.http.post(this.url+"/api/details/create",formData).subscribe();
      this.formInitializer();
      this.check=true;
      this.dialogRef.close();
    }
    else if(this.data.checker===true){
      let enteredData:fullStack={
        '_id':this.data.message?._id,
        'name':this.name,
        'gender':this.gender,
        'address':this.address,
        'createdAt': this.data.message?.createdAt,
        'updatedAt': this.data.message?.updatedAt,
        '__v': this.data.message?.__v
      }
      this.http.put<fullStack>(this.url+"/api/details/update"+"/"+enteredData._id?.toString(), enteredData).subscribe();
      this.formInitializer();
      this.check=true;
      this.dialogRef.close();
    }
  }
  ngOnDestroy(): void {
    if(this.check===true){
      this.check=false;
    }
  }

}
