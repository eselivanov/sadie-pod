import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberMaintenanceComponent } from './prescriber-maintenance.component';

describe('PrescriberMaintenanceComponent', () => {
  let component: PrescriberMaintenanceComponent;
  let fixture: ComponentFixture<PrescriberMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
