import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs5Component } from './couchs5.component';

describe('Couchs5Component', () => {
  let component: Couchs5Component;
  let fixture: ComponentFixture<Couchs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
