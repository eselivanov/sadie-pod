import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberSearchComponent } from './prescriber-search.component';

describe('PrescriberSearchComponent', () => {
  let component: PrescriberSearchComponent;
  let fixture: ComponentFixture<PrescriberSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
