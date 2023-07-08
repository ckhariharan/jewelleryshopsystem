import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac11Component } from './couchprac11.component';

describe('Couchprac11Component', () => {
  let component: Couchprac11Component;
  let fixture: ComponentFixture<Couchprac11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
