import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberDelegateCardListComponent } from './prescriber-delegate-card-list.component';

describe('PrescriberDelegateCardListComponent', () => {
  let component: PrescriberDelegateCardListComponent;
  let fixture: ComponentFixture<PrescriberDelegateCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberDelegateCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberDelegateCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
