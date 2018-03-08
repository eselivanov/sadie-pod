import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormsModule }                  from '@angular/forms';
import { HttpClientModule }             from '@angular/common/http';
import { AppComponent }                 from './app.component';


// PrimeNG Components
import { DynamicFormComponent }         from './dynamic-form.component';
import { InputTextModule }              from 'primeng/inputtext';
import { ButtonModule }                 from 'primeng/button';
import { DropdownModule }               from 'primeng/dropdown';
import { RadioButtonModule }            from 'primeng/radiobutton';
import { CalendarModule }               from 'primeng/calendar';
import { DataTableModule }              from 'primeng/datatable';
import { TableModule }                  from 'primeng/table';
import { CheckboxModule }               from 'primeng/checkbox';
import { MessagesModule }               from 'primeng/messages';
import { MessageModule }                from 'primeng/message';

// PrimeNG model
import { SelectItem }                   from 'primeng/primeng';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
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
import { InMemoryDataService }            from './in-memory-data.service';

import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, DropdownModule, 
        TableModule, CheckboxModule, CalendarModule, RadioButtonModule, DataTableModule, BrowserModule, MessagesModule, 
        MessageModule, BrowserAnimationsModule, HttpClientModule, 
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
      
      ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, 
    SelectItemPipePipe, ComplexTableComponent, GeneralRequestInfoComponent, 
    PatientRequestInfoComponent, PrescriberRequestInfoComponent, DrugRequestInfoComponent, 
    DrugDosageRequestInfoComponent 
  ],
  providers: [ QuestionControlService, QuestionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
