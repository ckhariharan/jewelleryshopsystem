import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs4Component } from './couchs4.component';

describe('Couchs4Component', () => {
  let component: Couchs4Component;
  let fixture: ComponentFixture<Couchs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
