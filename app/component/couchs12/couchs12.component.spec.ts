import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs12Component } from './couchs12.component';

describe('Couchs12Component', () => {
  let component: Couchs12Component;
  let fixture: ComponentFixture<Couchs12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
