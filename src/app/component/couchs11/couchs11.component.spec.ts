import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs11Component } from './couchs11.component';

describe('Couchs11Component', () => {
  let component: Couchs11Component;
  let fixture: ComponentFixture<Couchs11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
