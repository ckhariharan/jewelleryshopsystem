import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac3Component } from './couchprac3.component';

describe('Couchprac3Component', () => {
  let component: Couchprac3Component;
  let fixture: ComponentFixture<Couchprac3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
