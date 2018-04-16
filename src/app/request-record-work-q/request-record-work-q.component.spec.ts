import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRecordWorkQComponent } from './request-record-work-q.component';

describe('RequestRecordWorkQComponent', () => {
  let component: RequestRecordWorkQComponent;
  let fixture: ComponentFixture<RequestRecordWorkQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRecordWorkQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRecordWorkQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
