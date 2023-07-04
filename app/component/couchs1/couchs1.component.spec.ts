import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs1Component } from './couchs1.component';

describe('Couchs1Component', () => {
  let component: Couchs1Component;
  let fixture: ComponentFixture<Couchs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
