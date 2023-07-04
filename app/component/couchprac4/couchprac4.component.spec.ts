import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac4Component } from './couchprac4.component';

describe('Couchprac4Component', () => {
  let component: Couchprac4Component;
  let fixture: ComponentFixture<Couchprac4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
