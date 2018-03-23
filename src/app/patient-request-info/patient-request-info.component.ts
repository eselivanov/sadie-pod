import { Component, Input, OnInit } from '@angular/core';

import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-request-info',
  templateUrl: './patient-request-info.component.html',
  styleUrls: ['./patient-request-info.component.css']
})
export class PatientRequestInfoComponent implements OnInit {
  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }

  
}
