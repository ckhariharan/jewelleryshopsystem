import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all components used in the routing configuration
import { CouchpracComponent } from './component/couchprac/couchprac.component';
import { HomeComponent } from './component/home/home.component';
import { PurchaseComponent } from './component/purchase/purchase.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { Dashboard1Component } from './component/dashboard1/dashboard1.component';
import { Couchprac1Component } from './component/couchprac1/couchprac1.component';
import { Couchprac2Component } from './component/couchprac2/couchprac2.component';
import { Couchprac3Component } from './component/couchprac3/couchprac3.component';
import { Couchprac4Component } from './component/couchprac4/couchprac4.component';
import { Couchprac5Component } from './component/couchprac5/couchprac5.component';
import { Couchprac6Component } from './component/couchprac6/couchprac6.component';
import { Couchprac7Component } from './component/couchprac7/couchprac7.component';
import { Couchprac8Component } from './component/couchprac8/couchprac8.component';
import { Couchprac9Component } from './component/couchprac9/couchprac9.component';
import { Couchprac10Component } from './component/couchprac10/couchprac10.component';
import { Couchprac11Component } from './component/couchprac11/couchprac11.component';
import { Couchprac12Component } from './component/couchprac12/couchprac12.component';
import { Couchprac13Component } from './component/couchprac13/couchprac13.component';
import { Couchprac15Component } from './component/couchprac15/couchprac15.component';
import { Couchprac16Component } from './component/couchprac16/couchprac16.component';
import { Couchprac14Component } from './component/couchprac14/couchprac14.component';
import { Couchprac18Component } from './component/couchprac18/couchprac18.component';
import { Couchprac17Component } from './component/couchprac17/couchprac17.component';
import { Couchprac19Component } from './component/couchprac19/couchprac19.component';
import { Couchs1Component } from './component/couchs1/couchs1.component';
import { Couchs20Component } from './component/couchs20/couchs20.component';
import { Couchs19Component } from './component/couchs19/couchs19.component';
import { Couchs2Component } from './component/couchs2/couchs2.component';
import { Couchs4Component } from './component/couchs4/couchs4.component';
import { Couchs3Component } from './component/couchs3/couchs3.component';
import { Couchs5Component } from './component/couchs5/couchs5.component';
import { Couchs6Component } from './component/couchs6/couchs6.component';
import { Couchs7Component } from './component/couchs7/couchs7.component';
import { Couchs8Component } from './component/couchs8/couchs8.component';
import { Couchs9Component } from './component/couchs9/couchs9.component';
import { Couchs10Component } from './component/couchs10/couchs10.component';
import { Couchs11Component } from './component/couchs11/couchs11.component';
import { Couchs12Component } from './component/couchs12/couchs12.component';
import { Couchs13Component } from './component/couchs13/couchs13.component';
import { Couchs14Component } from './component/couchs14/couchs14.component';
import { Couchs15Component } from './component/couchs15/couchs15.component';
import { Couchs16Component } from './component/couchs16/couchs16.component';
import { Couchs17Component } from './component/couchs17/couchs17.component';
import { Couchs18Component } from './component/couchs18/couchs18.component';
import { ViewComponent } from './component/view/view.component';
import { GbangleComponent } from './component/gbangle/gbangle.component';
import { GearringsComponent } from './component/gearrings/gearrings.component';
import { GnecklesComponent } from './component/gneckles/gneckles.component';
import { GringsComponent } from './component/grings/grings.component';
import { GaboutComponent } from './component/gabout/gabout.component';
import { SaboutComponent } from './component/sabout/sabout.component';
import { SpendantsComponent } from './component/spendants/spendants.component';
import { SringsComponent } from './component/srings/srings.component';
import { SnecklesComponent } from './component/sneckles/sneckles.component';
import { SearringsComponent } from './component/searrings/searrings.component';
import { SviewComponent } from './component/sview/sview.component';


// Define the routes for the application
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'couch',component:CouchpracComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'purchaseorde',component:PurchaseComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard1',component:Dashboard1Component},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'couchprac',component:CouchpracComponent},
  {path:'couchprac1',component:Couchprac1Component},
  {path:'couchprac2',component:Couchprac2Component},
  {path:'couchprac3',component:Couchprac3Component},
  {path:'couchprac4',component:Couchprac4Component},
  {path:'couchprac5',component:Couchprac5Component},
  {path:'couchprac6',component:Couchprac6Component},
  {path:'couchprac7',component:Couchprac7Component},
  {path:'couchprac8',component:Couchprac8Component},
  {path:'couchprac9',component:Couchprac9Component},
  {path:'couchprac10',component:Couchprac10Component},
  {path:'couchprac11',component:Couchprac11Component},
  {path:'couchprac12',component:Couchprac12Component},
  {path:'couchprac13',component:Couchprac13Component},
  {path:'couchprac14',component:Couchprac14Component},
  {path:'couchprac15',component:Couchprac15Component},
  {path:'couchprac16',component:Couchprac16Component},
  {path:'couchprac17',component:Couchprac17Component},
  {path:'couchprac18',component:Couchprac18Component},
  {path:'couchprac19',component:Couchprac19Component},
  {path:'couchs1',component:Couchs1Component},
  {path:'couchs2',component:Couchs2Component},
  {path:'couchs3',component:Couchs3Component},
  {path:'couchs4',component:Couchs4Component},
  {path:'couchs5',component:Couchs5Component},
  {path:'couchs6',component:Couchs6Component},
  {path:'couchs7',component:Couchs7Component},
  {path:'couchs8',component:Couchs8Component},
  {path:'couchs9',component:Couchs9Component},
  {path:'couchs10',component:Couchs10Component},
  {path:'couchs11',component:Couchs11Component},
  {path:'couchs12',component:Couchs12Component},
  {path:'couchs13',component:Couchs13Component},
  {path:'couchs14',component:Couchs14Component},
  {path:'couchs15',component:Couchs15Component},
  {path:'couchs16',component:Couchs16Component},
  {path:'couchs17',component:Couchs17Component},
  {path:'couchs18',component:Couchs18Component},
  {path:'couchs19',component:Couchs19Component},
  {path:'couchs20',component:Couchs20Component},
  {path:'view',component:ViewComponent},
  {path:'gbangle',component:GbangleComponent},
  {path:'gearrings',component:GearringsComponent},
  {path:'gneckles',component:GnecklesComponent},
  {path:'grings',component:GringsComponent},
  {path:'gabout',component:GaboutComponent},
  {path:'sabout',component:SaboutComponent},
  {path:'spendant',component:SpendantsComponent},
  {path:'sring',component:SringsComponent},
  {path:'sneckle',component:SnecklesComponent},
  {path:'searring',component:SearringsComponent},
  {path:'sview',component:SviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
