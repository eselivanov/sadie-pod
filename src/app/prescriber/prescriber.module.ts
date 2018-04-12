import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PrescribersComponent } from './prescribers/prescribers.component';
import { PrescriberDetailComponent } from './prescriber-detail/prescriber-detail.component';
import { PrescriberService }    from '../service/prescriber.service';
import { PrescriberDashboardComponent } from './prescriber-dashboard/prescriber-dashboard.component';
import { PrescriberDelegateComponent } from './prescriber-delegate/prescriber-delegate.component';
import { PrescriberDelegateCardListComponent } from './prescriber-delegate-card-list/prescriber-delegate-card-list.component';
import { PrescriberDelegatesComponent } from './prescriber-delegates/prescriber-delegates.component';
import { PrescriberLocationDetailComponent } from './prescriber-location-detail/prescriber-location-detail.component';
import { PrescriberLocationsComponent } from './prescriber-locations/prescriber-locations.component';
import { PrescriberMaintenanceComponent } from './prescriber-maintenance/prescriber-maintenance.component';
import { PrescriberSearchComponent } from './prescriber-search/prescriber-search.component';
import { PrescribersCardListComponent } from './prescribers-card-list/prescribers-card-list.component';
import { DelegateComponent } from './delegate/delegate.component';
import { PrescriberDelegateService } from '../service/prescriber-delegate.service';
import { PrescriberLocationService } from '../service/prescriber-location.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule
  ],
  providers: [ PrescriberService, PrescriberDelegateService, PrescriberLocationService],
  declarations: [PrescribersComponent, PrescriberDetailComponent,
     PrescriberDashboardComponent, PrescriberDelegateComponent, 
     PrescriberDelegateCardListComponent, PrescriberDelegatesComponent, 
     PrescriberLocationDetailComponent, PrescriberLocationsComponent, 
     PrescriberMaintenanceComponent, PrescriberSearchComponent, PrescribersCardListComponent, DelegateComponent]
})
export class PrescriberModule { }
