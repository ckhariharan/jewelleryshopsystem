import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SviewComponent } from './sview.component';

describe('SviewComponent', () => {
  let component: SviewComponent;
  let fixture: ComponentFixture<SviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
