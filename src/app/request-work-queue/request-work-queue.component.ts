import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RequestForm} from '../model/request-form';
import {Prescriber} from '../model/prescriber';
import {Patient} from '../model/patient';
import {DrugRequest} from '../model/drug-request';
import {EADrugRequest} from '../model/ea-drug-request';
import { KeyPair } from '../model/key-pair';
import { CodeTableService } from '../service/code-table.service';
/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-request-work-queue',
  templateUrl: './request-work-queue.component.html',
  styleUrls: ['./request-work-queue.component.css']
})
export class RequestWorkQueueComponent implements OnInit {
  classifications: KeyPair[];
  priorities: KeyPair[];
  specialHandling: KeyPair[];
  requestForm : RequestForm;
  request : RequestForm;
  ReqId : number;  
  
  displayedColumns = ['requestId', 'prescriberName', 'drug', 'indication', 'patientName'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  requestForms : RequestForm[];
  dataSource = new MatTableDataSource();
  /*
  currentReq:RequestForm = {prescriberName : "Dr. Nick Riviera",
                            licenceNumber : "12345678",
                            licenceType : "CPSO", 
                            jurisdiction : "ON",
                            id:2,
                            practiceLocationName : "Nick's Hollywood Upstairs Medical Express", 
                            practiceLocationAddressLine1 : "Springfield USA",
                            practiceLocationFaxNumber : "(613) 555-5555", 
                            practiceLocationPhoneNumber : "1-600-DOCTORB (The 'B' is for Bargain)"
                          };
                          */

                         
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  
  constructor(private service: CodeTableService) { }

  ngOnInit() {
    this.service.getClassification().subscribe(classifications => {
      if (classifications) {
        this.classifications = classifications;
      }
    });

    this.service.getPriority().subscribe(priorities => {
      if (priorities) {
        this.priorities = priorities;
      }
    });

    this.service.getSpecialHandling().subscribe(specialHandling => {
      if (specialHandling) {
        this.specialHandling = specialHandling;
      }
    });
    this.getRequests();
    this.requestForms = [];
    this.requestForms.push(this.requestForm);
    this.requestForms.push(this.request);
    this.dataSource = new MatTableDataSource(this.requestForms);

  }
  getRequests(): void {
    //this.requestForm = new RequestForm(this.ReqId,new Prescriber(),new Patient(),new DrugRequest()  );
    this.requestForm = new RequestForm();
    this.requestForm.ReqId = 2;
    this.requestForm.Prescriber = new Prescriber();
    this.requestForm.Patient = new Patient();
    //this.requestForm.DrugRequest = new DrugRequest();
    this.requestForm.EADrugRequest = new EADrugRequest();
    
    this.requestForm.Prescriber.id = 2;
    this.requestForm.Prescriber.name = "Dr. Test";
    this.requestForm.Prescriber.licenceNumber = "111111111";
    this.requestForm.Prescriber.licenceType = "CPSO";
    this.requestForm.Prescriber.jurisdiction = "ON";
    this.requestForm.Prescriber.practiceLocationName = "";
    this.requestForm.Prescriber.practiceLocationAddressLine1 = "Springfield USA";
    this.requestForm.Prescriber.practiceLocationFaxNumber = "(613) 555-5555";
    this.requestForm.Prescriber.practiceLocationPhoneNumber = "1-600-DOCTORB (The 'B' is for Bargain)";

    this.requestForm.Patient.healthNumber = "1234567890";
    this.requestForm.Patient.firstName = "Tester";
    this.requestForm.Patient.middleName = "test";
    this.requestForm.Patient.lastName = "Testing";
    this.requestForm.Patient.dateOfBirth = new Date(2000,1,1);

    this.requestForm.EADrugRequest.drug = "Tylenol";
    this.requestForm.EADrugRequest.indication = "Swelling";
    //this.requestForm.DrugRequest.questionId

    //this.requestForm.EADrugRequest.classication =;
    //this.requestForm.EADrugRequest.requestPriority= 1;
    


    this.request = new RequestForm();
    this.request = new RequestForm();
    this.request.ReqId = 1;
    this.request.Prescriber = new Prescriber();
    this.request.Patient = new Patient();
    this.request.EADrugRequest = new EADrugRequest();
    
    this.request.Prescriber.id = 1;
    this.request.Prescriber.name = "Dr. Nick Riviera";
    this.request.Prescriber.licenceNumber = "12345678";
    this.request.Prescriber.licenceType = "CPSO";
    this.request.Prescriber.jurisdiction = "ON";
    this.request.Prescriber.practiceLocationName = "Nick's Hollywood Upstairs Medical Express";
    this.request.Prescriber.practiceLocationAddressLine1 = "Springfield USA";
    this.request.Prescriber.practiceLocationFaxNumber = "(613) 555-5555";
    this.request.Prescriber.practiceLocationPhoneNumber = "1-600-DOCTORB (The 'B' is for Bargain)";

    this.request.Patient.healthNumber = "1234567890";
    this.request.Patient.firstName = "Tester";
    this.request.Patient.middleName = "test";
    this.request.Patient.lastName = "Testing";
    this.request.Patient.dateOfBirth = new Date(2000,1,1);

    this.request.EADrugRequest.drug = "Tylenol";
    this.request.EADrugRequest.indication = "Swelling";
    //this.requestForm.DrugRequest.questionId

    //this.requestForm.EADrugRequest.classication =;
    //this.requestForm.EADrugRequest.requestPriority= 1;
    //this.requestForms = [];
  }

}

export interface Element {
  requestId: number,
  prescriberName: string;
  drug: string;
  indication: string;
  patientName: string;
}

const ELEMENT_DATA: Element[] = [
  {requestId: 1, prescriberName: 'Hydrogen', drug:'Tylenol' , indication: 'Swelling', patientName: 'H'},
  
];