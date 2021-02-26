import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CalcComponent } from './calc/calc.component';
import { TestComponent } from './test/test.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Pro1Component } from './pro1/pro1.component';
import { NameeditorComponent } from './nameeditor/nameeditor.component';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CalcComponent,
    TestComponent,
    LoginComponent,
    Pro1Component,
    NameeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
