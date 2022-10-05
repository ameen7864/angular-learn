import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'todolist',
    component: TodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
