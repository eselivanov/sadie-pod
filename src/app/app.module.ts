import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormsModule }                  from '@angular/forms';
import { AppComponent }                 from './app.component';

import { DynamicFormComponent }         from './dynamic-form.component';
import { InputTextModule }              from 'primeng/inputtext';
import { ButtonModule }                 from 'primeng/button';
import { DropdownModule }               from 'primeng/dropdown';
import { RadioButtonModule }            from 'primeng/radiobutton';
import { CalendarModule }               from 'primeng/calendar';
import { DataTableModule }              from 'primeng/datatable';
import { TableModule }                  from 'primeng/table';
import { CheckboxModule }               from 'primeng/checkbox';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { SelectItemPipePipe } from './select-item-pipe.pipe';
import { SelectItem } from 'primeng/primeng';

import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { ComplexTableComponent } from './complex-table/complex-table.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, DropdownModule, TableModule, CheckboxModule, CalendarModule, RadioButtonModule, DataTableModule, BrowserModule,
        BrowserAnimationsModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, SelectItemPipePipe, ComplexTableComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
