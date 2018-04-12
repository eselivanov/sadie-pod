import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberDelegatesComponent } from './prescriber-delegates.component';

describe('PrescriberDelegatesComponent', () => {
  let component: PrescriberDelegatesComponent;
  let fixture: ComponentFixture<PrescriberDelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberDelegatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
