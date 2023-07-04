import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac15Component } from './couchprac15.component';

describe('Couchprac15Component', () => {
  let component: Couchprac15Component;
  let fixture: ComponentFixture<Couchprac15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
