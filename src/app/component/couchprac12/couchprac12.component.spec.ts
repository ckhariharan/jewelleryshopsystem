import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac12Component } from './couchprac12.component';

describe('Couchprac12Component', () => {
  let component: Couchprac12Component;
  let fixture: ComponentFixture<Couchprac12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
