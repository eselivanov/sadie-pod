import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberRequestInfoComponent } from './prescriber-request-info.component';

describe('PrescriberRequestInfoComponent', () => {
  let component: PrescriberRequestInfoComponent;
  let fixture: ComponentFixture<PrescriberRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberRequestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
