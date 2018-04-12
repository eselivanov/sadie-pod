import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersCardListComponent } from './prescribers-card-list.component';

describe('PrescribersCardListComponent', () => {
  let component: PrescribersCardListComponent;
  let fixture: ComponentFixture<PrescribersCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribersCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribersCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
