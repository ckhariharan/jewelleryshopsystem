import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SringsComponent } from './srings.component';

describe('SringsComponent', () => {
  let component: SringsComponent;
  let fixture: ComponentFixture<SringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
