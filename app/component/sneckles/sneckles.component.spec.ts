import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnecklesComponent } from './sneckles.component';

describe('SnecklesComponent', () => {
  let component: SnecklesComponent;
  let fixture: ComponentFixture<SnecklesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnecklesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnecklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
