import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs16Component } from './couchs16.component';

describe('Couchs16Component', () => {
  let component: Couchs16Component;
  let fixture: ComponentFixture<Couchs16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
