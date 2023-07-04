import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {
  
sidenav: any;
elementRef: any;




movehome(He:string) {
 this.sidenav.close();
 const element =this.elementRef.nativeElement.querySelector('#${He})');
 element.scrollIntoView({behavior:'smooth',block:'start'});

}

movebangles(B:string) {
 this.sidenav.close();
 const element =this.elementRef.nativeElement.querySelector('#${B})');
 element.scrollIntoView({behavior:'smooth',block:'start'});

}
moveneckles(N:string) {
  this.sidenav.close();
  const element =this.elementRef.nativeElement.querySelector('#${N})');
  element.scrollIntoView({behavior:'smooth',block:'start'});
 
 }
moveearrings(E:string) {
 this.sidenav.close();
 const element =this.elementRef.nativeElement.querySelector('#${E})');
 element.scrollIntoView({behavior:'smooth',block:'start'});

}
moverings(R:string) {
 this.sidenav.close();
 const element =this.elementRef.nativeElement.querySelector('#${R})');
 element.scrollIntoView({behavior:'smooth',block:'start'});

}
moveabout(A:string) {
 this.sidenav.close();
 const element =this.elementRef.nativeElement.querySelector('#${A})');
 element.scrollIntoView({behavior:'smooth',block:'start'});

}

}
