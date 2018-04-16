import { Patient } from '../model/patient';
import { Prescriber } from '../model/prescriber';
import { DrugRequest } from '../model/drug-request';
import { RequestForm } from '../model/request-form';
import { DateAdapter } from '@angular/material';
import { isDate } from 'util';

/*
export const REQUESTS: RequestForm[] = [
  { healthNumber: "1234567890",
    firstName: 'Pat', middleName: "ient",
    lastName: "Zero", dateOfBirth: new Date(19910101)},
    Prescriber: new Prescriber(){}},
  //{ healthNumber: "0987654321", firstName: 'Test', middleName: "Tester", lastName: "Testerson", dateOfBirth:new Date(1999090)}
  
];
*/
export class MockRequests{

    


    
}
//export const REQUESTS: RequestForm;
export const firstPrescriber:Prescriber = {name : "Dr. Nick Riviera",
                            licenceNumber : "12345678",
                            licenceType : "CPSO", 
                            jurisdiction : "ON",
                            id:2,
                            practiceLocationName : "Nick's Hollywood Upstairs Medical Express", 
                            practiceLocationAddressLine1 : "Springfield USA",
                            practiceLocationFaxNumber : "(613) 555-5555", 
                            practiceLocationPhoneNumber : "1-600-DOCTORB (The 'B' is for Bargain)"
                          };
export const firstPatient:Patient = {firstName : "Dr. Nick Riviera",
                            lastName : "12345678",
                            middleName : "CPSO",
                            healthNumber: '1234567890',
                            dateOfBirth: new Date(19990901)
                            
                          };
export const firstDrugRequest:DrugRequest = {drug : "Dr. Nick Riviera",
                          indication : "12345678",
                          questionId: 4
                          
                        };    
                        //firstPrescriber,firstPatient,firstDrugRequest                      
//export const firstReq: RequestForm = ;
                            

/**
 * name : "Dr. Nick Riviera",
                            licenceNumber : "12345678",
                            licenceType : "CPSO", 
                            jurisdiction : "ON",
                            id:2,
                            practiceLocationName : "Nick's Hollywood Upstairs Medical Express", 
                            practiceLocationAddressLine1 : "Springfield USA",
                            practiceLocationFaxNumber : "(613) 555-5555", 
                            practiceLocationPhoneNumber : "1-600-DOCTORB (The 'B' is for Bargain)",
                            firstName : "Dr. Nick Riviera",
                            lastName : "12345678",
                            middleName : "CPSO",
                            healthNumber: '1234567890',
                            dateOfBirth: new Date(1999090),
                            drug : "Dr. Nick Riviera",
                            indication : "12345678",
                            questionId: 4};
 */