import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
@Input() item:{name:any,email:any}={name:'',email:''}
  ngOnInit(): void {
  }
  // dis=1
  // getVal(type:any){
  //   // alert(val)
  //   type=='incre'?this.dis+1:this.dis-1
  // }

  // name='ameen'
  // disabled=true
  // color='no color'
  // userDetails=[
  //   {name:'ameen', mob:'777'}
  // ]
  // display=true
  // toggle(){
  //   this.display=!this.display
  // }
}
