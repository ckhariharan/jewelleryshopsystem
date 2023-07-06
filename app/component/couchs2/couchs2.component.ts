import { Component, Input } from '@angular/core';

import { Ser1Service } from '../../service/ser1.service';
import { FormBuilder, Validators } from '@angular/forms';

import {   Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-couchs2',
  templateUrl: './couchs2.component.html',
  styleUrls: ['./couchs2.component.css']
})
export class Couchs2Component {
  @Input()
  min: number | undefined
 
date=new Date();
formattedDate = this.date.toLocaleDateString('en-GB');

displayedColumns: string[] = ['Name', 'password','product','amount1','balance','Actions'];
public employeeFormGroup=this.fb.group({
'employee_name':['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
'_id': [], 
'_rev': [],
'password': ['',Validators.required],
'dat':[this.formattedDate ,Validators.required],
 'product':[" 'K'  Alphabet Pendant"],
amount :[1300],
'amount1':['1,300₹'], 
  
  
    balance:[],
      percent:[10],
      'perc':['10%'],
      
      'quantity':['',Validators.required],
  'balan':[],
  
  
  });
    am: any;
    balan: any;
    
    constructor (private fb: FormBuilder,public Service:Ser1Service,private router:Router){}
    
    
    calculate() {
      const amt : any  = this.employeeFormGroup.value.amount;
    
      const per : any = this.employeeFormGroup.value.percent;
      const qty : any  = this.employeeFormGroup.value.quantity;
    
    this.am=amt;
    const b : any =  amt / 100 * per; 
    const p : any =  amt - b;
    const bal : any = p * qty;
      this.balan=bal;
     console.log(bal);
      this.employeeFormGroup.value.balance = this.balan ;
    }
    
    
    
    saveAction(){
    
    if(!this.employeeFormGroup.valid){
      Swal.fire('Error', 'Please Fill All Boxs', 'error');
    }else{
    let employeeObject:any=this.employeeFormGroup.value;
    console.log(employeeObject);
    
    employeeObject['object_name']='jwsilver'
    
    
    if (employeeObject['_id'] == null) {
      delete employeeObject['_id']
     }
      if (employeeObject['_rev'] == null) {
      delete employeeObject['_rev']
      } 
       
     
       let bulkDocsArray = [];
       bulkDocsArray.push(employeeObject);
       this.Service.updateDocument(bulkDocsArray);
       }
        
      /* else {
       alert("Some of fields not valid")
       }*/
       //this.fetchAction();
     
    this.onEdit('item');
     }
       fetchAction() {
         this.Service.searchDocument('object_name:jwsilver')
    
    
          }
          navigate(){
            this.router.navigateByUrl('sview');
          }
         deleteAction(employeeObject: any) {
          this.Service.deleteDocument(employeeObject['_id'], employeeObject['_rev'])
          }
          editAction(employeeObject:any){
            this.employeeFormGroup.reset()
            this.employeeFormGroup.patchValue(employeeObject)
          }
          resetAction() {
         this.employeeFormGroup.reset()
            this.employeeFormGroup.markAsUntouched()
           } 
          
           onreset(){
             this.employeeFormGroup.reset();
            }
            
            applyFilter(event: Event) {
              const filterValue = (event.target as HTMLInputElement).value;
              this.Service.dataSource.filter = filterValue.trim().toLowerCase();
          
              if (this.Service.dataSource.paginator) {
                this.Service.dataSource.paginator.firstPage();
              }
            }
            ngOnInit() {
       
              this.fetchAction()
            }
        
            onEdit(item :any) {
              this.Service.employees.forEach(element => {
                element.isEdit = false;
              });
              item.isEdit = true ; 
       
       
            }

     

}
