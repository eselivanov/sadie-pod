import { KeyPair } from "./key-pair";

export class DrugHistory {
  drug: KeyPair;
  startDate: Date;
  endDate: Date;
  efficacy: boolean;
  tolerance: boolean;
  attachment: File;
  constructor(
    drug? : KeyPair,
    startDate? : Date,
    endDate? : Date,
    efficacy? : boolean,
    tolerance? : boolean,
    attachement?: File
  ) {}
}