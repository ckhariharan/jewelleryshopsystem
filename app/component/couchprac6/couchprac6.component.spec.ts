import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac6Component } from './couchprac6.component';

describe('Couchprac6Component', () => {
  let component: Couchprac6Component;
  let fixture: ComponentFixture<Couchprac6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
