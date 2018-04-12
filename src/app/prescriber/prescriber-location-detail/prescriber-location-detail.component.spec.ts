import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberLocationDetailComponent } from './prescriber-location-detail.component';

describe('PrescriberLocationDetailComponent', () => {
  let component: PrescriberLocationDetailComponent;
  let fixture: ComponentFixture<PrescriberLocationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberLocationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
