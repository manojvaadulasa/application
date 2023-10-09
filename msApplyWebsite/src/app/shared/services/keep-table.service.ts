import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeepTableService {
  private keepDisplay:boolean;
  constructor() {
    this.keepDisplay=false;
  }
  public setDisplay(){
    this.keepDisplay=true;
  }
  public getDisplay():boolean{
    return this.keepDisplay;
  }
}
