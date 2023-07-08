import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{
  


constructor(public router:Router){}
 /* ngOnInit(): void {

 }*/



logou(){
  localStorage.removeItem('email');
this.router.navigateByUrl('/home');
}


}
