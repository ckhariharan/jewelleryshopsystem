import { Component , Input} from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ser1Service } from '../../service/ser1.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sview',
  templateUrl: './sview.component.html',
  styleUrls: ['./sview.component.css']
})
export class SviewComponent {

  
  
displayedColumns: string[] = ['date','Name', 'address','product','quantity','total','Actions'];
public employeeFormGroup=this.fb.group({
  'employee_name':['',Validators.pattern('^[a-zA-Z]+$')],
  '_id': [], 
  '_rev': [],
  'password': [],
 'b':[],
 balance:[],
   'product':['name of the product'],
  'amount' :['22000'],
'quantity':[],
balan:[],
'dat':[]

});

constructor (private fb: FormBuilder,public Service:Ser1Service){}




printx(){
  window.print();
}
saveAction(){

if(this.employeeFormGroup.valid){

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
    
   else {
   Swal.fire('Only Alphabetic Characters are Allowed','','warning')
   }
 
this.onEdit('item');
 }
   fetchAction() {
     this.Service.searchDocument('object_name:jwsilver')
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
