import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Prescriber } from '../../model/prescriber';
import { PrescriberLocation } from '../../model/prescriber-location';
import { PrescriberLocationService }  from '../../service/prescriber-location.service';

@Component({
  selector: 'app-prescriber-location-detail',
  templateUrl: './prescriber-location-detail.component.html',
  styleUrls: ['./prescriber-location-detail.component.css']
})
export class PrescriberLocationDetailComponent implements OnInit {
  @Input() prescriberLocation: PrescriberLocation;
  @Input() prescriber: Prescriber;

  constructor(
    private route: ActivatedRoute,
    private prescriberLocationService: PrescriberLocationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPrescriberLocation();
  }

  getPrescriberLocation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prescriberLocationService.getPrescriberLocation(id)
      .subscribe(prescriberLocation => this.prescriberLocation = prescriberLocation);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.prescriberLocationService.updatePrescriberLocation(this.prescriberLocation)
      .subscribe(() => this.goBack());
  }
}
