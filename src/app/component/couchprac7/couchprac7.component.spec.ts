import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac7Component } from './couchprac7.component';

describe('Couchprac7Component', () => {
  let component: Couchprac7Component;
  let fixture: ComponentFixture<Couchprac7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
