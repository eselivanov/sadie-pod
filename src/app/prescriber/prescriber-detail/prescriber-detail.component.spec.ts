import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberDetailComponent } from './prescriber-detail.component';

describe('PrescriberDetailComponent', () => {
  let component: PrescriberDetailComponent;
  let fixture: ComponentFixture<PrescriberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
