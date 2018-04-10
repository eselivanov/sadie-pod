import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrugSearchComponent } from './drug-search.component';
//Base
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
//Routers
import { RouterTestingModule} from '@angular/router/testing';
//import { AppRoutingModule } from './app-routing.module';


// DynamicFormComponents
import { DynamicFormComponent }         from '../../component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../../component/dynamic-question/dynamic-form-question.component';

// Material Components


import {MatInputModule}                 from '@angular/material/input';
import {MatNativeDateModule, MatAutocomplete, MatAutocompleteModule}            from '@angular/material';

//Modules
import { ReactiveFormsModule }          from '@angular/forms';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
// PrimeNG model
import { SelectItem }                   from 'primeng/primeng';
//Item Pipe
import { SelectItemPipePipe } from '../../select-item-pipe.pipe';
//Components
import { GeneralRequestInfoComponent } from '../../general-request-info/general-request-info.component';
import { PatientRequestInfoComponent } from '../../patient-request-info/patient-request-info.component';
import { PrescriberRequestInfoComponent } from '../../prescriber-request-info/prescriber-request-info.component';
import { DrugRequestInfoComponent } from '../../drug-request-info/drug-request-info.component';
import { DrugDosageRequestInfoComponent } from '../../drug-dosage-request-info/drug-dosage-request-info.component';

// In Memory Data Web API / Memory Service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from '../../service/in-memory-data.service';
import { HttpClientModule }             from '@angular/common/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

describe('DrugSearchComponent', () => {
  let component: DrugSearchComponent;
  let fixture: ComponentFixture<DrugSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule,
        MatInputModule, ReactiveFormsModule,  MatAutocompleteModule, BrowserAnimationsModule
         ],
      providers: [ ],
      declarations: [ DrugSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
