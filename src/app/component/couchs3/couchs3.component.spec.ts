import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couchs3Component } from './couchs3.component';

describe('Couchs3Component', () => {
  let component: Couchs3Component;
  let fixture: ComponentFixture<Couchs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Couchs3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Couchs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
