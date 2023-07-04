import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs10Component } from './couchs10.component';

describe('Couchs10Component', () => {
  let component: Couchs10Component;
  let fixture: ComponentFixture<Couchs10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
