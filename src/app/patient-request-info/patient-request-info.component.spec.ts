import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRequestInfoComponent } from './patient-request-info.component';

import { GeneralRequestInfoComponent } from '../general-request-info/general-request-info.component';
import { DrugRequestInfoComponent } from '../drug-request-info/drug-request-info.component';

//Base
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
//Routers
import { RouterTestingModule} from '@angular/router/testing';
//import { AppRoutingModule } from './app-routing.module';

//Services
import { QuestionControlService }    from '../question-control.service';
import { QuestionService } from '../service/question.service';
import { RuleServiceService } from '../service/rule-service.service';
import { CodeTableService } from '../service/code-table.service';
import { ElasticSearchService } from '../service/elastic-search.service';
import { PatientService } from '../service/patient.service';

// DynamicFormComponents
import { DynamicFormComponent }         from '../component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../component/dynamic-question/dynamic-form-question.component';

// Material Components

import {MatFormFieldModule}             from '@angular/material/form-field';
import {MatButtonModule}                from '@angular/material/button';
import {MatInputModule}                 from '@angular/material/input';
import {MatSelectModule}                from '@angular/material/select';
import {MatCheckboxModule}              from '@angular/material/checkbox';
import {MatDatepickerModule}            from '@angular/material/datepicker';
import {MatCardModule}                  from '@angular/material/card';
import {MatGridListModule}              from '@angular/material/grid-list';
import {MatIconModule}                  from '@angular/material/icon';
import {MatRadioModule}                 from '@angular/material/radio';
import {MatTableModule}                 from '@angular/material/table';
import {MatListModule}                  from '@angular/material/list';
import {MatExpansionModule}             from '@angular/material/expansion';
import {MatSidenavModule}               from '@angular/material/sidenav';
import {MatToolbarModule}               from '@angular/material/toolbar';
import {MatMenuModule}                  from '@angular/material/menu';
import {MatNativeDateModule, MatAutocomplete, MatAutocompleteModule}            from '@angular/material';

//Modules
import { ReactiveFormsModule }          from '@angular/forms';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
// PrimeNG model
import { SelectItem }                   from 'primeng/primeng';
//Item Pipe
import { SelectItemPipePipe } from '../select-item-pipe.pipe';
//Components
import { ComplexTableComponent } from '../complex-table/complex-table.component';

import { PrescriberRequestInfoComponent } from '../prescriber-request-info/prescriber-request-info.component';
import { DrugDosageRequestInfoComponent } from '../drug-dosage-request-info/drug-dosage-request-info.component';

// In Memory Data Web API / Memory Service and HttpClient
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from '../service/in-memory-data.service';
import { HttpClientModule }             from '@angular/common/http';
describe('PatientRequestInfoComponent', () => {
  let component: PatientRequestInfoComponent;
  let fixture: ComponentFixture<PatientRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, MatFormFieldModule, MatButtonModule,
        MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule,
        MatCardModule, MatGridListModule, MatIconModule, MatRadioModule, MatTableModule,
        MatListModule, MatExpansionModule, MatSidenavModule, MatToolbarModule, MatMenuModule, 
        ReactiveFormsModule, MatNativeDateModule, MatAutocompleteModule, BrowserAnimationsModule,
        HttpClientModule],
      providers: [ QuestionControlService, QuestionService, RuleServiceService, CodeTableService,
          ElasticSearchService, PatientService ],
      declarations: [ PatientRequestInfoComponent, GeneralRequestInfoComponent, DrugRequestInfoComponent, DrugDosageRequestInfoComponent, ComplexTableComponent, AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        SelectItemPipePipe,
        PrescriberRequestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRequestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
