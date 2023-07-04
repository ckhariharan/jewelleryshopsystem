import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnecklesComponent } from './gneckles.component';

describe('GnecklesComponent', () => {
  let component: GnecklesComponent;
  let fixture: ComponentFixture<GnecklesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnecklesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GnecklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
