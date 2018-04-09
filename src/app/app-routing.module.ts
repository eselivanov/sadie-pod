import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DashboardComponent }   from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/gde', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gde', component: DynamicFormComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
