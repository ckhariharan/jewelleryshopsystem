import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbangleComponent } from './gbangle.component';

describe('GbangleComponent', () => {
  let component: GbangleComponent;
  let fixture: ComponentFixture<GbangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GbangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
