import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberLocationsComponent } from './prescriber-locations.component';

describe('PrescriberLocationsComponent', () => {
  let component: PrescriberLocationsComponent;
  let fixture: ComponentFixture<PrescriberLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriberLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriberLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
