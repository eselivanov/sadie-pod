import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RequestForm} from '../model/request-form';
import {Prescriber} from '../model/prescriber';
import {Patient} from '../model/patient';
import {DrugRequest} from '../model/drug-request';
import {EADrugRequest} from '../model/ea-drug-request';
import { KeyPair } from '../model/key-pair';
import { CodeTableService } from '../service/code-table.service';
import { PrescriberService }  from './../service/prescriber.service';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-request-record-work-q',
  templateUrl: './request-record-work-q.component.html',
  styleUrls: ['./request-record-work-q.component.css']
})
export class RequestRecordWorkQComponent implements OnInit {
  classifications: KeyPair[];
  classification: KeyPair;
  priorities: KeyPair[];
  specialHandling: KeyPair[];
  requestForm : RequestForm;
  request : RequestForm;
  ReqId : number;  
  key: string;
  prescriber: Prescriber;
  displayedColumns = ['requestId', 'prescriberName', 'classification','drug', 'indication', 'patientName'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  prescribers$: Observable<Prescriber[]>;
  requestForms : RequestForm[];
  dataSource2 = new MatTableDataSource();
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
    this.dataSource2.filter = filterValue;
  }

  
  constructor(private codeService: CodeTableService,
    private prescriberService: PrescriberService) { }

  ngOnInit() {
    this.codeService.getClassification().subscribe(classifications => {
      if (classifications) {
        this.classifications = classifications;
      }
    });
    
    this.codeService.getPriority().subscribe(priorities => {
      if (priorities) {
        this.priorities = priorities;
      }
    });

    this.codeService.getSpecialHandling().subscribe(specialHandling => {
      if (specialHandling) {
        this.specialHandling = specialHandling;
      }
    });

    this.requestForm = new RequestForm();
    //this.prescriber = this.prescriberService.getPrescriberReqWorkQueue(2);
    //this.prescriber = new Prescriber();
    
    //this.getPrescriberById(12);
    this.requestForm.ReqId = 2;
    this.requestForm.Prescriber = new Prescriber();
    this.requestForm.EADrugRequest = new EADrugRequest();
    this.requestForm.Patient = new Patient();
    this.prescriberService.getPrescriber(11)
    .subscribe(prescriber => this.requestForm.Prescriber = prescriber);
   
   // this.requestForm.Prescriber = this.prescriber;
   this.key ='New';
   
    this.codeService.getClassificationById(this.key)
      .subscribe(classification => this.requestForm.EADrugRequest.classification = classification);
      this.requestForm.EADrugRequest.drug = "Tylenol";
      this.requestForm.EADrugRequest.indication = "Swelling";
      this.requestForm.Patient.firstName = "Tester";
     //  {if (classification) {
       // this.requestForm.EADrugRequest.classification = classification;
  //    }
 //   });
 //   this.requestForm.EADrugRequest.classification = new KeyPair("New", "New");
    //this.requestForm.EADrugRequest.classification.key = "New";
    //this.requestForm.EADrugRequest.classification.value = "New";
    //this.getRequests();
    //Request object Array that gets sent to table as datasource
    this.requestForms = [];
    this.requestForms.push(this.requestForm);
    //this.requestForms.push(this.request);
    this.dataSource2 = new MatTableDataSource(this.requestForms);

  }
  getPrescriber(id): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    //const id = 11;
    this.prescriberService.getPrescriber(id)
      .subscribe(prescriber => this.prescriber = prescriber);
  }
  setRequestFormPrescriber(id): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    //const id = 11;
    this.prescriberService.getPrescriber(id)
      .subscribe(prescriber => this.prescriber = prescriber);
  }
  getPrescriberById(number): void{
  //  this.prescriberService.getPrescriberById(number).subscribe(prescriber => this.prescriber = prescriber);

  }
  getRequests(): void {
    //this.requestForm = new RequestForm(this.ReqId,new Prescriber(),new Patient(),new DrugRequest()  );
    this.requestForm = new RequestForm();
    this.requestForm.ReqId = 2;
    this.requestForm.Prescriber = new Prescriber();
    this.requestForm.Patient = new Patient();
    //this.requestForm.DrugRequest = new DrugRequest();
    
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

    //this.requestForm.DrugRequest.drug = "Tylenol";
    //this.requestForm.DrugRequest.indication = "Swelling";
    //this.requestForm.DrugRequest.questionId

    //this.requestForm.EADrugRequest.classication =;
    //this.requestForm.EADrugRequest.requestPriority= 1;
    


    this.request = new RequestForm();
    this.request = new RequestForm();
    this.request.ReqId = 1;
    this.request.Prescriber = new Prescriber();
    this.request.Patient = new Patient();
    //this.request.DrugRequest = new DrugRequest();
    
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

   // this.request.DrugRequest.drug = "Tylenol";
   // this.request.DrugRequest.indication = "Swelling";
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
