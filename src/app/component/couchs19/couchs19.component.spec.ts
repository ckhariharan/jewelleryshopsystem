import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs19Component } from './couchs19.component';

describe('Couchs19Component', () => {
  let component: Couchs19Component;
  let fixture: ComponentFixture<Couchs19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
