import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInInputComponent } from './log-in-input.component';

describe('LogInInputComponent', () => {
  let component: LogInInputComponent;
  let fixture: ComponentFixture<LogInInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
