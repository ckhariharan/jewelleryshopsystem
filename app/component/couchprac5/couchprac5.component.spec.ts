import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchprac5Component } from './couchprac5.component';

describe('Couchprac5Component', () => {
  let component: Couchprac5Component;
  let fixture: ComponentFixture<Couchprac5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchprac5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchprac5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
