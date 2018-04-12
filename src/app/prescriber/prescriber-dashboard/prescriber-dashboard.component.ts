import { Component, OnInit } from '@angular/core';
import { Prescriber } from '../../model/prescriber';
import { PrescriberService } from '../../service/prescriber.service';

@Component({
  selector: 'app-prescriber-dashboard',
  templateUrl: './prescriber-dashboard.component.html',
  styleUrls: ['./prescriber-dashboard.component.css']
})
export class PrescriberDashboardComponent implements OnInit {
  prescribers: Prescriber[] = [];
  constructor(private prescriberService: PrescriberService) { }

  ngOnInit() {
    this.getPrescribers();
  }
  getPrescribers(): void {
    this.prescriberService.getPrescribers()
      .subscribe(prescribers => this.prescribers = prescribers.slice(0, 3));
  }

}
