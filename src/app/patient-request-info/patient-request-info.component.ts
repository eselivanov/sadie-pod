import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-request-info',
  templateUrl: './patient-request-info.component.html',
  styleUrls: ['./patient-request-info.component.css']
})
export class PatientRequestInfoComponent implements OnInit {
<<<<<<< HEAD
  @Input() patient: Patient;
  patients: Patient[];
  constructor(private patientService: PatientService) { }
=======
  @Input() patient?: Patient;

  constructor() { }
>>>>>>> cc14ec8696b46dbd9c0b8fc43043fd7f874a3122

  ngOnInit() {
    this.getPatients();
  }
  
  getPatients(): void {
    this.patientService.getPatients()
        .subscribe(patients => this.patients = patients);
  }
}
