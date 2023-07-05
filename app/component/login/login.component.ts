import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router:Router){
  
}
email:any="";
password:any="";

submitForm(form:any):void{
  if(this.email===""||this.password===""){
    Swal.fire('please fill all the fields','','warning')

  }
  else if(this.email==="hari1@gmail.com"|| "hari2@gmail.com" && this.password=="harihari")
  {
    localStorage.setItem('email',this.email);
    this.router.navigateByUrl('purchase');
    Swal.fire('Login successful','','success')

  }else{
    Swal.fire('Invalid user ','','warning')
  }
}
notyet():void{
  Swal.fire('this service not available now:(','','error')
  
}




  ngOnInit(): void {

    if(localStorage.getItem('email')!==null){
      this.router.navigateByUrl('/purchase');
    }
  }

  
  

}
