import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearringsComponent } from './gearrings.component';

describe('GearringsComponent', () => {
  let component: GearringsComponent;
  let fixture: ComponentFixture<GearringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GearringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
