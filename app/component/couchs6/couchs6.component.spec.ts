import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs6Component } from './couchs6.component';

describe('Couchs6Component', () => {
  let component: Couchs6Component;
  let fixture: ComponentFixture<Couchs6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
