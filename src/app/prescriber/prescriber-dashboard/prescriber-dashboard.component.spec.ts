import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberDashboardComponent } from './prescriber-dashboard.component';

describe('PrescriberDashboardComponent', () => {
  let component: PrescriberDashboardComponent;
  let fixture: ComponentFixture<PrescriberDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
