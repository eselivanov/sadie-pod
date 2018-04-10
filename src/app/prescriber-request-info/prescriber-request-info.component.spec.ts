import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberRequestInfoComponent } from './prescriber-request-info.component';

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

// DynamicFormComponents
import { DynamicFormComponent }         from '../component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../component/dynamic-question/dynamic-form-question.component';

// Material Components


import {MatInputModule}                 from '@angular/material/input';
import {MatSelectModule}                from '@angular/material/select';
import {MatCheckboxModule}              from '@angular/material/checkbox';
import {MatDatepickerModule}            from '@angular/material/datepicker';
import {MatIconModule}                  from '@angular/material/icon';
import {MatRadioModule}                 from '@angular/material/radio';
import {MatTableModule}                 from '@angular/material/table';
import {MatListModule}                  from '@angular/material/list';
import {MatExpansionModule}             from '@angular/material/expansion';
import {MatToolbarModule}               from '@angular/material/toolbar';
import {MatMenuModule}                  from '@angular/material/menu';
import {MatNativeDateModule, MatAutocomplete, MatAutocompleteModule}            from '@angular/material';

//Modules
import { ReactiveFormsModule }          from '@angular/forms';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

// In Memory Data Web API / Memory Service and HttpClient
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from '../service/in-memory-data.service';
import { HttpClientModule }             from '@angular/common/http';


describe('PrescriberRequestInfoComponent', () => {
  let component: PrescriberRequestInfoComponent;
  let fixture: ComponentFixture<PrescriberRequestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, MatSelectModule, MatDatepickerModule,
         MatInputModule,MatCheckboxModule,MatIconModule,
         MatRadioModule, MatTableModule,
        MatListModule, MatExpansionModule,  MatToolbarModule, MatMenuModule, 
        ReactiveFormsModule, MatAutocompleteModule, BrowserAnimationsModule,
        HttpClientModule],
      providers: [  
           ],
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
