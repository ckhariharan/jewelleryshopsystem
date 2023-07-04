import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs18Component } from './couchs18.component';

describe('Couchs18Component', () => {
  let component: Couchs18Component;
  let fixture: ComponentFixture<Couchs18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
