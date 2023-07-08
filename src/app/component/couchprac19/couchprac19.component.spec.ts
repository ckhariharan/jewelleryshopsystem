import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac19Component } from './couchprac19.component';

describe('Couchprac19Component', () => {
  let component: Couchprac19Component;
  let fixture: ComponentFixture<Couchprac19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
