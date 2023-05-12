import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  @Output() onGenerateClick=new EventEmitter()
  // SEND DATA FROM CHILD TO PARENT
  childData:number =0

  number:number=0;
  colRand:number=0;
  username:string=""
  gender:string=""
  data:any={}
  img:string=""
  dob:string=""
  age:string=""
  address:string=""
  mob:string=""
  company:string=""
  jobTitle:string=""
  email:string=""
  // colors:any=["red","green","blue","yellow","orange","grey","purple"]
  chooseColor:string=""
  constructor(private api:ApiService){}
  @Output() colorChoosed = new EventEmitter();
  ngOnInit(){
    this.api.getData().subscribe({
      next:(response)=>{
        console.log(response);
        this.data=response

        this.generateUser()
        
      }
    })
  }
  generateUser(){
    this.api.getData().subscribe({
      next:(response)=>{
        console.log(response);
        this.data=response

        this.onGenerateClick.emit()
        this.colRand=Math.floor(Math.random()*6+1)
        this.childData=this.colRand


      }
    })
     this.number=Math.floor(Math.random()*30+1)
     this.colRand=Math.floor(Math.random()*6+1)
    console.log("number",this.number);
    this.username=this.data.users[this.number].firstName
    this.gender=this.data.users[this.number].gender
    this.img=this.data.users[this.number].image
    this.dob=this.data.users[this.number].birthDate
    this.age=this.data.users[this.number].age
    this.address=this.data.users[this.number].address.address
    this.mob=this.data.users[this.number].phone
    this.company=this.data.users[this.number].company.address.address
    this.jobTitle=this.data.users[this.number].company.title
    this.email=this.data.users[this.number].email
    // this.chooseColor="background-color:"+this.colors[this.colRand]
    this.childData=this.colRand
  }
  }

