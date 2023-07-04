import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac8Component } from './couchprac8.component';

describe('Couchprac8Component', () => {
  let component: Couchprac8Component;
  let fixture: ComponentFixture<Couchprac8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
