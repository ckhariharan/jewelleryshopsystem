import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendantsComponent } from './spendants.component';

describe('SpendantsComponent', () => {
  let component: SpendantsComponent;
  let fixture: ComponentFixture<SpendantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
