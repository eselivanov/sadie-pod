import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugDosageRequestInfoComponent } from './drug-dosage-request-info.component';

describe('DrugDosageRequestInfoComponent', () => {
  let component: DrugDosageRequestInfoComponent;
  let fixture: ComponentFixture<DrugDosageRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugDosageRequestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugDosageRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
