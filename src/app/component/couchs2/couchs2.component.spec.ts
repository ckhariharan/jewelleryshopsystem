import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs2Component } from './couchs2.component';

describe('Couchs2Component', () => {
  let component: Couchs2Component;
  let fixture: ComponentFixture<Couchs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
