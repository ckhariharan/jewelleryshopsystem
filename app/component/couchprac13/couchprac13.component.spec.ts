import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac13Component } from './couchprac13.component';

describe('Couchprac13Component', () => {
  let component: Couchprac13Component;
  let fixture: ComponentFixture<Couchprac13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
