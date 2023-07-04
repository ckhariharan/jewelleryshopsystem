import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs9Component } from './couchs9.component';

describe('Couchs9Component', () => {
  let component: Couchs9Component;
  let fixture: ComponentFixture<Couchs9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
