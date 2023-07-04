import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs20Component } from './couchs20.component';

describe('Couchs20Component', () => {
  let component: Couchs20Component;
  let fixture: ComponentFixture<Couchs20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
