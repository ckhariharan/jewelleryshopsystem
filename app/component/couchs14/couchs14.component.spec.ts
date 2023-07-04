import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs14Component } from './couchs14.component';

describe('Couchs14Component', () => {
  let component: Couchs14Component;
  let fixture: ComponentFixture<Couchs14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
