import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWorkQueueComponent } from './request-work-queue.component';

describe('RequestWorkQueueComponent', () => {
  let component: RequestWorkQueueComponent;
  let fixture: ComponentFixture<RequestWorkQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestWorkQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWorkQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
