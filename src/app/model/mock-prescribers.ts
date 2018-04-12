import { Prescriber } from './prescriber';

export const PRESCRIBERS: Prescriber[] = [
  { name : "Dr. Nick Riviera",
  licenceNumber : "12345678",
  licenceType : "CPSO", 
  jurisdiction : "ON",
  id:1,
  practiceLocationName : "Nick's Hollywood Upstairs Medical Express", 
  practiceLocationAddressLine1 : "Springfield USA",
  practiceLocationFaxNumber : "(613) 555-5555", 
  practiceLocationPhoneNumber : "1-600-DOCTORB (The 'B' is for Bargain)" },
  { name : "Dr. Test OneTwo",
  licenceNumber : "88888888",
  licenceType : "CPSO", 
  jurisdiction : "ON",
  id:2,
  practiceLocationName : "Somewhere else", 
  practiceLocationAddressLine1 : "Small Town USA",
  practiceLocationFaxNumber : "(613) 222-2222", 
  practiceLocationPhoneNumber : "1-600-TESTING"}

];