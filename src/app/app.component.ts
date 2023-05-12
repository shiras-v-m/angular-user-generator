import { Component, Input, ViewChild,AfterViewInit, OnInit } from '@angular/core';
 import { ApiService } from './services/api.service';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  colors:any=["antiquewhite","hotpink","fuchsia","yellow","orange","grey","burlywood"]

//  Get data from child 
  @ViewChild(DataComponent) child !: DataComponent 
  chooseColor:string=""
  title = 'apitest';

  constructor(private api:ApiService){}

  ngAfterViewInit(): void {
    console.log(this.child.childData);
    
  }
  ngOnInit(){
    this.api.getData().subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
  }
  setColor(){
    console.log(this.child.childData);
    this.chooseColor="background-color:"+this.colors[this.child.childData]
  }
}
