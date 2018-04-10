import { KeyPair } from "./key-pair";

export class DrugHistory {
  drug: KeyPair;
  startDate: Date;
  endDate: Date;
  efficacy: boolean;
  tolerance: boolean;
  labAttachment: File;
  constructor(
    drug? : KeyPair,
    startDate? : Date,
    endDate? : Date,
    efficacy? : boolean,
    tolerance? : boolean,
    labAttachement?: File
  ) {}
}