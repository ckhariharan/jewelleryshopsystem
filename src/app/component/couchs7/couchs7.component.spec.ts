import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs7Component } from './couchs7.component';

describe('Couchs7Component', () => {
  let component: Couchs7Component;
  let fixture: ComponentFixture<Couchs7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
