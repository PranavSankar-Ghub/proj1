import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  value1:any
   value2:any  
   value3:any
   operator:string=''
   number:any=''
   eq_opr:string=''
   
 

   operate(opr:any){
    if(opr=='='){
      this.eq_opr=opr
      console.log(this.eq_opr)
        if(opr=="+"){
        this.operator=="+"
      
       console.log(this.operator  )
       this.value3= parseInt(this.value1)+ parseInt(this.value2)
       console.log(this.value3)
       
     }
    if ( this.operator=="-"){
       
       console.log(this.operator)
       this.value3= parseInt(this.value1)-parseInt(this.value2)

     }
      if(this.operator=="/"){

      
      console.log(this.operator)
      this.value3= parseInt(this.value1)/parseInt(this.value2)
     }
       if(this.operator=="*"){

       console.log(this.operator)
       this.value3= parseInt(this.value1)*parseInt(this.value2)
     }
    
     else{
       
     }
    
    }
   }
  
   Numb( no: any){
     if(this.operator==""){
       this.value1=no
      console.log(this.value1)

     }
     else{
       this.value2=no
       console.log(this.value2)
     }
   }

  constructor() { }

  ngOnInit(): void {
  }
  setvalue1(event:any){
    console.log("function invoked...",event)
    this.value1=(event.target as HTMLInputElement).value
    console.log(this.value1)

  }
  setvalue2(event:any){
   this.value2=(event.target as HTMLInputElement).value

  }
  setvalue3(event:any){
    this.value3=(event.target as HTMLInputElement).value
 
  }
 


}
