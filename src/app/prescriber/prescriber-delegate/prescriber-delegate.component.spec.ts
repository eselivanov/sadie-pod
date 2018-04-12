import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberDelegateComponent } from './prescriber-delegate.component';

describe('PrescriberDelegateComponent', () => {
  let component: PrescriberDelegateComponent;
  let fixture: ComponentFixture<PrescriberDelegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberDelegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
