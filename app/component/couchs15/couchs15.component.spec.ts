import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs15Component } from './couchs15.component';

describe('Couchs15Component', () => {
  let component: Couchs15Component;
  let fixture: ComponentFixture<Couchs15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
