import { Patient } from './model/patient';
import { DateAdapter } from '@angular/material';
import { isDate } from 'util';

export const PATIENTS: Patient[] = [
  { healthNumber: "1234567890", firstName: 'Pat', middleName: "ient", lastName: "Zero", dateOfBirth: new Date(19910101)},
  { healthNumber: "0987654321", firstName: 'Test', middleName: "Tester", lastName: "Testerson", dateOfBirth:new Date(1999090)}
  
];