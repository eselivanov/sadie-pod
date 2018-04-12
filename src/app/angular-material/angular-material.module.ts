import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {MatTableDataSource}             from '@angular/material';
import {MatTabsModule}                  from '@angular/material/tabs';

import {MatNativeDateModule, MatAutocomplete, MatAutocompleteModule}            from '@angular/material';


@NgModule({
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule, MatCardModule, MatGridListModule,
    MatIconModule, MatRadioModule, MatTableModule, MatListModule, MatExpansionModule, MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatMenuModule, MatTabsModule
  ],
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule, MatCardModule, MatGridListModule,
    MatIconModule, MatRadioModule, MatTableModule, MatListModule, MatExpansionModule, MatSidenavModule, MatToolbarModule, MatButtonModule,
    MatMenuModule, MatTabsModule],
  declarations: []
})
export class AngularMaterialModule { }
