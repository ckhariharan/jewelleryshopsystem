import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac14Component } from './couchprac14.component';

describe('Couchprac14Component', () => {
  let component: Couchprac14Component;
  let fixture: ComponentFixture<Couchprac14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
