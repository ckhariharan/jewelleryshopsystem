import { Component, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  containerRef!: ViewContainerRef;

  constructor(private elementRef: ElementRef, private router: Router) { }


  home1(home: string): void {
    const element = this.elementRef.nativeElement.querySelection(`#${home} `);
    element.scrollInttoView({ behavior: 'smooth', block: 'start' });

  }

  /*
  ngOnInit(): void {
  }
  */

  login() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }


}
