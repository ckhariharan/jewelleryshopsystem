import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac9Component } from './couchprac9.component';

describe('Couchprac9Component', () => {
  let component: Couchprac9Component;
  let fixture: ComponentFixture<Couchprac9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
