import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac17Component } from './couchprac17.component';

describe('Couchprac17Component', () => {
  let component: Couchprac17Component;
  let fixture: ComponentFixture<Couchprac17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
