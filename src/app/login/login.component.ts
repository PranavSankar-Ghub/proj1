import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }
  model= new Login()
  save(){
    console.log("uname",this.model.username)
    console.log("pass",this.model.password)
  }
  
}
