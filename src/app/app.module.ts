import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component'
import { FormsModule } from '@angular/forms';
import { UsdinrPipe } from './pipes/usdinr.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactComponent } from './react/react.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component'
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodolistComponent,
    ChildtoparentComponent,
    UsdinrPipe,
    ReactComponent,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
