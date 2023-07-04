import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac1Component } from './couchprac1.component';

describe('Couchprac1Component', () => {
  let component: Couchprac1Component;
  let fixture: ComponentFixture<Couchprac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
