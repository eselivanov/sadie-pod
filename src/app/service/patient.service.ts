import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { PATIENTS } from '../mock-patients';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 
@Injectable()
export class PatientService {

  constructor() { }

  getPatients(): Observable<Patient[]> {
    return of(PATIENTS);
  }
}
