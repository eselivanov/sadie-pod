import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRequestInfoComponent } from './patient-request-info.component';

describe('PatientRequestInfoComponent', () => {
  let component: PatientRequestInfoComponent;
  let fixture: ComponentFixture<PatientRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRequestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
