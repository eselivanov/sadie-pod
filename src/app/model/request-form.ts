import { EADrugRequest } from '../model/ea-drug-request';
import { PatientRequestInfoComponent } from '../patient-request-info/patient-request-info.component';
import { GeneralRequestInfoComponent } from '../general-request-info/general-request-info.component';
import { DrugRequestInfoComponent } from '../drug-request-info/drug-request-info.component';
import { PrescriberRequestInfoComponent } from '../prescriber-request-info/prescriber-request-info.component';
import { DrugDosageRequestInfoComponent } from '../drug-dosage-request-info/drug-dosage-request-info.component';
//import { GeneralRequestInfoComponent } from '../general-request-info/general-request-info.component';
import { DrugRequest } from '../model/drug-request';
import { Patient } from '../model/patient';
import { Prescriber } from '../model/prescriber';
import { KeyPair } from "./key-pair";

export class RequestForm {
    ReqId : number;
    EADrugRequest : EADrugRequest;
    Prescriber : Prescriber;
    Patient : Patient;
   // DrugRequest : DrugRequest;

    /*
    constructor(    ReqId : number, 
        Prescriber : Prescriber,
        Patient : Patient,
        DrugRequest : DrugRequest){            
        }
        */

   // GeneralRequestInfoComponent : GeneralRequestInfoComponent;
   // PrescriberRequestInfoComponent : PrescriberRequestInfoComponent;
   // PatientRequestInfoComponent : PatientRequestInfoComponent;
   // DrugRequestInfoComponent : DrugRequestInfoComponent;

}