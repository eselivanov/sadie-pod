import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugRequestInfoComponent } from './drug-request-info.component';

describe('DrugRequestInfoComponent', () => {
  let component: DrugRequestInfoComponent;
  let fixture: ComponentFixture<DrugRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugRequestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
