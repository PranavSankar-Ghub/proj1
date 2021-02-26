import { Component, OnInit } from '@angular/core';
import{Prolog} from '../prolog';

@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  pro1 =new Prolog('','','','')
  saves(){
    console.log(this.pro1.product_id)
    console.log(this.pro1.product_name)
    console.log(this.pro1.price)
    console.log(this.pro1.description)
  }

}
