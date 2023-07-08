import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchpracComponent } from './couchprac.component';

describe('CouchpracComponent', () => {
  let component: CouchpracComponent;
  let fixture: ComponentFixture<CouchpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchpracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouchpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
