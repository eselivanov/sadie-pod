import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DashboardComponent }   from './dashboard/dashboard.component'
import { PrescribersComponent }   from './prescriber/prescribers/prescribers.component'
import { PrescriberDashboardComponent }   from './prescriber/prescriber-dashboard/prescriber-dashboard.component'
import { PrescriberDetailComponent }   from './prescriber/prescriber-detail/prescriber-detail.component'
import { PrescriberDelegateComponent } from './prescriber/prescriber-delegate/prescriber-delegate.component';
import { PrescriberDelegateCardListComponent } from './prescriber/prescriber-delegate-card-list/prescriber-delegate-card-list.component';
import { PrescriberDelegatesComponent } from './prescriber/prescriber-delegates/prescriber-delegates.component';
import { PrescriberLocationDetailComponent } from './prescriber/prescriber-location-detail/prescriber-location-detail.component';
import { PrescriberLocationsComponent } from './prescriber/prescriber-locations/prescriber-locations.component';
import { PrescriberMaintenanceComponent } from './prescriber/prescriber-maintenance/prescriber-maintenance.component';
import { PrescriberSearchComponent } from './prescriber/prescriber-search/prescriber-search.component';
import { PrescribersCardListComponent } from './prescriber/prescribers-card-list/prescribers-card-list.component';
import { DelegateComponent } from './prescriber/delegate/delegate.component';
const routes: Routes = [
  { path: '', redirectTo: '/gde', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'prescriberDashboard', component: PrescriberDashboardComponent },
  { path: 'prescriber/:id', component: PrescriberDetailComponent },
  { path: 'prescribers', component: PrescribersComponent },
  { path: 'gde', component: DynamicFormComponent },
  { path: 'prescriberLocation/:id', component: PrescriberLocationDetailComponent},
  { path: 'prescriberDetail', component: PrescriberMaintenanceComponent }, 
  { path: 'prescriberDelegate', component: PrescriberDelegateComponent },
{ path: 'prescriberDelegate/:id', component: PrescriberDelegateComponent },  
{ path: 'delegates', component: DelegateComponent},
{ path: 'prescriberDelegate/:id', component: PrescriberDelegateComponent }
  
];
/*const routes: Routes = [
  { path: '', redirectTo: '/prescribers', pathMatch: 'full' },
  { path: 'prescribers', component: PrescribersComponent },
  { path: 'prescriber/:id', component: PrescriberDetailComponent, children: [
    { path: 'dashboard', component: PrescriberDashboardComponent, children: [
    { path: 'rsv:id', component: RsvComponent }
    ] },
     { path: 'prescriberLocation/:id', component: PrescriberLocationComponent},
     { path: 'prescriberDetail', component: PrescriberMaintenanceComponent, children: [
      { path: 'prescriberDelegate', component: PrescriberDelegateComponent },
     
    ] },
    { path: 'prescriberDelegate/:id', component: PrescriberDelegateComponent },
    { path: 'GDE', component: GdeComponent }
  ] },  
  { path: 'delegates', component: DelegatesComponent, children:[
    { path: 'prescriberDelegate/:id', component: PrescriberDelegateComponent },
  
  ]}
  

]; */

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
