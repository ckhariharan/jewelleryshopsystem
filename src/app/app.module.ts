import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Angular forms and HTTP modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import Angular Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { DatePipe } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


// Import all components used in the application
import { HomeComponent } from './component/home/home.component';
import { CouchpracComponent } from './component/couchprac/couchprac.component';
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
import { Couchprac14Component } from './component/couchprac14/couchprac14.component';
import { Couchprac15Component } from './component/couchprac15/couchprac15.component';
import { Couchprac16Component } from './component/couchprac16/couchprac16.component';
import { Couchprac17Component } from './component/couchprac17/couchprac17.component';
import { Couchprac18Component } from './component/couchprac18/couchprac18.component';
import { Couchprac19Component } from './component/couchprac19/couchprac19.component';
import { Couchs1Component } from './component/couchs1/couchs1.component';
import { Couchs2Component } from './component/couchs2/couchs2.component';
import { Couchs3Component } from './component/couchs3/couchs3.component';
import { Couchs4Component } from './component/couchs4/couchs4.component';
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
import { Couchs19Component } from './component/couchs19/couchs19.component';
import { Couchs20Component } from './component/couchs20/couchs20.component';
import { ViewComponent } from './component/view/view.component';
import { GbangleComponent } from './component/gbangle/gbangle.component';
import { GnecklesComponent } from './component/gneckles/gneckles.component';
import { GearringsComponent } from './component/gearrings/gearrings.component';
import { GringsComponent } from './component/grings/grings.component';
import { SpendantsComponent } from './component/spendants/spendants.component';
import { SnecklesComponent } from './component/sneckles/sneckles.component';
import { SearringsComponent } from './component/searrings/searrings.component';
import { SringsComponent } from './component/srings/srings.component';
import { GaboutComponent } from './component/gabout/gabout.component';
import { SaboutComponent } from './component/sabout/sabout.component';
import { SviewComponent } from './component/sview/sview.component';


@NgModule({
  declarations: [
    // Declare all the components used in the application
    AppComponent,
    HomeComponent,
    CouchpracComponent,
    PurchaseComponent,
    DashboardComponent,
    LoginComponent,
    Dashboard1Component,
    Couchprac1Component,
    Couchprac2Component,
    Couchprac3Component,
    Couchprac4Component,
    Couchprac5Component,
    Couchprac6Component,
    Couchprac7Component,
    Couchprac8Component,
    Couchprac9Component,
    Couchprac10Component,
    Couchprac11Component,
    Couchprac12Component,
    Couchprac13Component,
    Couchprac14Component,
    Couchprac15Component,
    Couchprac16Component,
    Couchprac17Component,
    Couchprac18Component,
    Couchprac19Component,
    Couchs1Component,
    Couchs2Component,
    Couchs3Component,
    Couchs4Component,
    Couchs5Component,
    Couchs6Component,
    Couchs7Component,
    Couchs8Component,
    Couchs9Component,
    Couchs10Component,
    Couchs11Component,
    Couchs12Component,
    Couchs13Component,
    Couchs14Component,
    Couchs15Component,
    Couchs16Component,
    Couchs17Component,
    Couchs18Component,
    Couchs19Component,
    Couchs20Component,
    ViewComponent,
    GbangleComponent,
    GnecklesComponent,
    GearringsComponent,
    GringsComponent,
    SpendantsComponent,
    SnecklesComponent,
    SearringsComponent,
    SringsComponent,
    GaboutComponent,
    SaboutComponent,
    SviewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatSliderModule,
    DatePipe,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
