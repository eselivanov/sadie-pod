import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: 'gde', component: DynamicFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
