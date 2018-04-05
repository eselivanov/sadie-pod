import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormsModule }                  from '@angular/forms';
import { HttpClientModule }             from '@angular/common/http';
import { AppComponent }                 from './app.component';

// Material Components
import {MatFormFieldModule}             from '@angular/material/form-field';
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
import {MatButtonModule}                from '@angular/material/button';
import {MatMenuModule}                  from '@angular/material/menu';

import {MatNativeDateModule, MatAutocomplete, MatAutocompleteModule}            from '@angular/material';
  // import {  MatMomentDateModule}        from '@angular/material-moment-adapter';

// PrimeNG Components

// import { InputTextModule }              from 'primeng/inputtext';
// import { ButtonModule }                 from 'primeng/button';
// import { DropdownModule }               from 'primeng/dropdown';
// import { RadioButtonModule }            from 'primeng/radiobutton';
// import { CalendarModule }               from 'primeng/calendar';
// import { DataTableModule }              from 'primeng/datatable';
// import { TableModule }                  from 'primeng/table';
// import { CheckboxModule }               from 'primeng/checkbox';
// import { MessagesModule }               from 'primeng/messages';
// import { MessageModule }                from 'primeng/message';

// PrimeNG model
import { SelectItem }                   from 'primeng/primeng';

// DynamicFormComponents
import { DynamicFormComponent }         from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-question/dynamic-form-question.component';


import { SelectItemPipePipe } from './select-item-pipe.pipe';


import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { GeneralRequestInfoComponent } from './general-request-info/general-request-info.component';
import { PatientRequestInfoComponent } from './patient-request-info/patient-request-info.component';
import { PrescriberRequestInfoComponent } from './prescriber-request-info/prescriber-request-info.component';
import { DrugRequestInfoComponent } from './drug-request-info/drug-request-info.component';
import { DrugDosageRequestInfoComponent } from './drug-dosage-request-info/drug-dosage-request-info.component';

// In Memory Data Web API / Memory Service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './service/in-memory-data.service';

// Flex Layout
import {FlexLayoutModule} from "@angular/flex-layout";

import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './service/question.service';
import { RuleServiceService } from './service/rule-service.service';
import { CodeTableService } from './service/code-table.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ElasticSearchService } from './service/elastic-search.service';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { PatientService } from './service/patient.service';
import { DrugSearchComponent } from './component/drug-search/drug-search.component';


// InputTextModule, ButtonModule, DropdownModule, 
//         TableModule, CheckboxModule, CalendarModule, RadioButtonModule, DataTableModule, MessagesModule, 
//         MessageModule, 


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, 

        MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule,
        MatDatepickerModule, MatNativeDateModule, MatCardModule, MatGridListModule,
        MatIconModule, MatRadioModule, MatTableModule, MatListModule, MatExpansionModule,
        MatSidenavModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatAutocompleteModule,
        HttpClientModule,
        FlexLayoutModule,
    
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
        ),
    
        AppRoutingModule, RouterModule,
      
      ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, 
    SelectItemPipePipe, ComplexTableComponent, GeneralRequestInfoComponent, 
    PatientRequestInfoComponent, PrescriberRequestInfoComponent, DrugRequestInfoComponent, 
    DrugDosageRequestInfoComponent, AutoCompleteComponent, DrugSearchComponent
  ],
  providers: [ QuestionControlService, PatientService, QuestionService, RuleServiceService, CodeTableService, ElasticSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}