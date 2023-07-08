import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac18Component } from './couchprac18.component';

describe('Couchprac18Component', () => {
  let component: Couchprac18Component;
  let fixture: ComponentFixture<Couchprac18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
