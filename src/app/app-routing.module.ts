import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [{
  path:"calc",
  component:CalcComponent
},{
  path:"todolist",
  component:TodolistComponent
},{
  path:"login",
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
