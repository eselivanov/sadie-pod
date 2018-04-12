import { Component, OnInit, Input } from '@angular/core';

import { Prescriber } from '../../model/prescriber';
import { PrescriberLocationService } from '../../service/prescriber-location.service';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { PrescriberLocation } from '../../model/prescriber-location';

@Component({
  selector: 'app-prescriber-locations',
  templateUrl: './prescriber-locations.component.html',
  styleUrls: ['./prescriber-locations.component.css']
})
export class PrescriberLocationsComponent implements OnInit {
    @Input() prescriber: Prescriber;
    prescriberLocations: PrescriberLocation[];
    locations: PrescriberLocation[];
    prescriberLocation: PrescriberLocation;
   
    constructor(private prescriberLocationService: PrescriberLocationService) { }
  
    ngOnInit() {
      this.getPrescriberLocations();
      this.getPrescriberLocationsByPrescriberId();
    }
    getPrescriberLocationsByPrescriberId(): void {
      this.prescriberLocationService.getPrescriberLocationsByPrescriberId(this.prescriber.id)
      .subscribe(locations => this.locations = locations);
    }
    getPrescriberLocations(): void {
      this.prescriberLocationService.getPrescriberLocations()
      .subscribe(prescriberLocations => this.prescriberLocations = prescriberLocations);
    }
  
    add(name: string, prescriberId: number): void {
      name = name.trim();
      if (!name) { return; }
      let newLocation = new PrescriberLocation();
      newLocation.name = name;
      newLocation.prescriberId = prescriberId;
      this.prescriberLocationService.addPrescriberLocation(newLocation)
        .subscribe(prescriberLocation => {
          this.prescriberLocations.push(prescriberLocation);
        });
    }
  
    delete(prescriberLocation: PrescriberLocation): void {
      this.prescriberLocations = this.prescriberLocations.filter(h => h !== prescriberLocation);
      this.prescriberLocationService.deletePrescriberLocation(prescriberLocation).subscribe();
    }
  
  }
