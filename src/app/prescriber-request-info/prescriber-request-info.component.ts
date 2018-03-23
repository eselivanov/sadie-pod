import { Component, Input, OnInit } from '@angular/core';
import { Prescriber } from '../model/prescriber';

@Component({
  selector: 'app-prescriber-request-info',
  templateUrl: './prescriber-request-info.component.html',
  styleUrls: ['./prescriber-request-info.component.css']
})
export class PrescriberRequestInfoComponent implements OnInit {
  @Input() prescriber : Prescriber;
  constructor() { }

  ngOnInit() {
    this.prescriber.name = "Dr. Nick Riviera";
    this.prescriber.licenceNumber = "12345678";
    this.prescriber.licenceType = "CPSO";
    this.prescriber.jurisdiction = "ON";
    this.prescriber.practiceLocationName = "Nick's Hollywood Upstairs Medical Express";
    this.prescriber.practiceLocationAddressLine1 = "Springfield USA";
    this.prescriber.practiceLocationFaxNumber = "(613) 555-5555";
    this.prescriber.practiceLocationPhoneNumber = "1-600-DOCTORB (The 'B' is for Bargain)";
  }

}
