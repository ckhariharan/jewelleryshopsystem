import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac10Component } from './couchprac10.component';

describe('Couchprac10Component', () => {
  let component: Couchprac10Component;
  let fixture: ComponentFixture<Couchprac10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
