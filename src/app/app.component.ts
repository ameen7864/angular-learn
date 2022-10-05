import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // data=0;
  // update(){
  //   this.data=this.data+1;
  // }
  // userdetails=[
  //   {name:'ameen', email:'ameen@gmail.com'},
  //   {name:'ameen', email:'ameen@gmail.com'},
  //   {name:'ameen', email:'ameen@gmail.com'},
  //   {name:'ameen', email:'ameen@gmail.com'}
  // ]

//child to parent data
// data=''
// updatedata(val:any){
//   this.data=val
// }

// two way data binding
// name:any

// pipes
// data:number=0
// updatedata(val:any){
//   this.data=val
//   console.log(val);
  

// }
loginuser(val:any){
  console.log(val);
  
}

// loginForm=new FormGroup({
//   user:new FormControl(''),
//   password:new FormControl('')
// })
  
}
