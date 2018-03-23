import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestInfoComponent } from './general-request-info.component';

describe('GeneralRequestInfoComponent', () => {
  let component: GeneralRequestInfoComponent;
  let fixture: ComponentFixture<GeneralRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRequestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
