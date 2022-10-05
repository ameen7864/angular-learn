import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//   loginForm=new FormGroup({
//     user:new FormControl('',[Validators.required]),
//     password:new FormControl('',[Validators.required])
//   })
// loginUser(){

// }
// get user(){
//   return this.loginForm.get('user')
// }
// get password(){
//   return this.loginForm.get('password')
// }
loginForm=new FormGroup({
  user:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
})
loginuser(){

}
get user(){
  return this.loginForm.get('user')
}
get email(){
  return this.loginForm.get('email')
}get password(){
  return this.loginForm.get('password')
}
}
