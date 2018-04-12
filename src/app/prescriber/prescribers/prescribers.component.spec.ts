import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersComponent } from './prescribers.component';

describe('PrescribersComponent', () => {
  let component: PrescribersComponent;
  let fixture: ComponentFixture<PrescribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
