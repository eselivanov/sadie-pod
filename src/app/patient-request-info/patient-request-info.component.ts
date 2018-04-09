import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-request-info',
  templateUrl: './patient-request-info.component.html',
  styleUrls: ['./patient-request-info.component.css']
})
export class PatientRequestInfoComponent implements OnInit {
  @Input() patient: Patient;
  healthCardFormControl = new FormControl('', [
    Validators.required,
    //Validators.maxLength(10),
    minLengthValidator
    //Validators.min(100000000)
  ]);
  constructor() { }

  ngOnInit() {
  }
   
}
function minLengthValidator(control: FormControl) { 
  let numberLength = control.value.length; 
  if (numberLength !== 10) { 
        
      return {
        numberLength
        }
      }
  return null; 
}