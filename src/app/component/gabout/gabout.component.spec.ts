import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaboutComponent } from './gabout.component';

describe('GaboutComponent', () => {
  let component: GaboutComponent;
  let fixture: ComponentFixture<GaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
