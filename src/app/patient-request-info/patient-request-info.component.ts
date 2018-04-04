import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-request-info',
  templateUrl: './patient-request-info.component.html',
  styleUrls: ['./patient-request-info.component.css']
})
export class PatientRequestInfoComponent implements OnInit {
  @Input() patient: Patient;
  patients: Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }
  
  getPatients(): void {
    this.patientService.getPatients()
        .subscribe(patients => this.patients = patients);
  }
}
