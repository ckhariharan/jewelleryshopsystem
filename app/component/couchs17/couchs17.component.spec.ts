import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs17Component } from './couchs17.component';

describe('Couchs17Component', () => {
  let component: Couchs17Component;
  let fixture: ComponentFixture<Couchs17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
