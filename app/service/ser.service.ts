import { Injectable, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SerService {
  couchDBUrl: string = 'https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud'
  couchDBUsername: string = xxxx-xxxx
   couchDBPassword: string = '69c1d2737d371d9f6b7f6009287e6ccc'
   databaseName: string = 'jewel'
   employees: Array<any> = [];
   dataSource!: MatTableDataSource<any>;

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
  private _ViewgComponent: any;
   
   

  constructor(public httpClient: HttpClient) { }
  updateDocument(requests: Array<any>) {
    this.httpClient.post(this.couchDBUrl + '/' + this.databaseName + '/_bulk_docs', { 'docs': requests }, {
     headers: {
     'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
     }
     }).subscribe((res: any) => {
     if (res[0]['ok']) {
      
     Swal.fire('Buy successful','Thanks to Buying Our Products','success' )
     }
     
     console.log("updateDocument", res);
     })
     }
     async searchDocument(query: string) {
     return this.httpClient.post(this.couchDBUrl + '/' + this.databaseName + '/_design/jw/_search/creditor_search',
   { 'q': query, 'include_docs': true }, {
   headers: {
  'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
 }
  }).subscribe((res: any) => {
  console.log("searchDocument", res);
   this.employees = res['rows'].map((row: any) => row['doc']);
   this.dataSource = new MatTableDataSource(this.employees)
   this.dataSource.paginator = this.paginator
   this.dataSource.sort = this.sort
  return res;
  })
   }
   deleteDocument(id: string, rev: string) {
         this.httpClient.delete(this.couchDBUrl + '/' + this.databaseName + '/' + id + '?rev=' + rev, {
           headers: {
             'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
           }
         }).subscribe(res => {
           console.log("deleteDocument", res);
         })
       }

}
