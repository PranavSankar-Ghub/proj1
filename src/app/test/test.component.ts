import { Component, OnInit } from '@angular/core';
import {faCalendar,faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  style1={'color':'red'}
  style2={'color':'blue'}
  check='false'
  style3={'color':'orange'}
  col:string=''
  calender=faCalendar
  coffee=faCoffee

  constructor() { }

  ngOnInit(): void {
  }
   color( event :any){
    this.col=(event.target as HTMLInputElement).value
    alert(this.col)
   }


}
