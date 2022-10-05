import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any[]=[]
  todoVal(val:any){
   
    this.list.push({id:this.list.length, name:val})
    
  }
  remove(id:number){
    this.list=this.list.filter(val=>val.id==id)
  }

}
