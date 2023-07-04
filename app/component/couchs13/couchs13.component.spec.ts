import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs13Component } from './couchs13.component';

describe('Couchs13Component', () => {
  let component: Couchs13Component;
  let fixture: ComponentFixture<Couchs13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
