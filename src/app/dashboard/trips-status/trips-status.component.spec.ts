import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsStatusComponent } from './trips-status.component';

describe('TripsStatusComponent', () => {
  let component: TripsStatusComponent;
  let fixture: ComponentFixture<TripsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
