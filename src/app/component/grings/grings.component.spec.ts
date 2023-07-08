import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GringsComponent } from './grings.component';

describe('GringsComponent', () => {
  let component: GringsComponent;
  let fixture: ComponentFixture<GringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
