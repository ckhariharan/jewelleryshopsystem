import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs8Component } from './couchs8.component';

describe('Couchs8Component', () => {
  let component: Couchs8Component;
  let fixture: ComponentFixture<Couchs8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
