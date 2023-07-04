import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac16Component } from './couchprac16.component';

describe('Couchprac16Component', () => {
  let component: Couchprac16Component;
  let fixture: ComponentFixture<Couchprac16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
