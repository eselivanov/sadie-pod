import { Component, Input, OnInit } from '@angular/core';
import { Prescriber } from '../model/prescriber';

@Component({
  selector: 'app-prescriber-request-info',
  templateUrl: './prescriber-request-info.component.html',
  styleUrls: ['./prescriber-request-info.component.css']
})
//added currentPres to initialize and create a prescriber to avoid ng test error. Will need to change
export class PrescriberRequestInfoComponent implements OnInit {
  @Input() prescriber: Prescriber;
  currentPres:Prescriber = {name : "Dr. Nick Riviera",
                            licenceNumber : "12345678",
                            licenceType : "CPSO", 
                            jurisdiction : "ON",
                            id:2,
                            practiceLocationName : "Nick's Hollywood Upstairs Medical Express", 
                            practiceLocationAddressLine1 : "Springfield USA",
                            practiceLocationFaxNumber : "(613) 555-5555", 
                            practiceLocationPhoneNumber : "1-600-DOCTORB (The 'B' is for Bargain)"
                          };
  constructor() { }
  
  ngOnInit() {
  
   this.prescriber = this.currentPres;
  /* 
   this.prescriber.name = "Dr. Nick Riviera";
    this.prescriber.licenceNumber = "12345678";
    this.prescriber.licenceType = "CPSO";
    this.prescriber.jurisdiction = "ON";
    this.prescriber.practiceLocationName = "Nick's Hollywood Upstairs Medical Express";
    this.prescriber.practiceLocationAddressLine1 = "Springfield USA";
    this.prescriber.practiceLocationFaxNumber = "(613) 555-5555";
    this.prescriber.practiceLocationPhoneNumber = "1-600-DOCTORB (The 'B' is for Bargain)";
    */
  }
 

}
