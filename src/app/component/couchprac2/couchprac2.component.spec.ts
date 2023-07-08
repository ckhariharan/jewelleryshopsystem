import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac2Component } from './couchprac2.component';

describe('Couchprac2Component', () => {
  let component: Couchprac2Component;
  let fixture: ComponentFixture<Couchprac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
