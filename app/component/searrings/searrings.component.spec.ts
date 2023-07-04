import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearringsComponent } from './searrings.component';

describe('SearringsComponent', () => {
  let component: SearringsComponent;
  let fixture: ComponentFixture<SearringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
