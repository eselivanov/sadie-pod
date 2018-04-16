import { KeyPair } from "./key-pair";

export class DrugHistory {
  drug: KeyPair;
  startDate: Date;
  endDate: Date;
  efficacy: boolean;
  tolerance: boolean;
  attachment: string;
  constructor(
    drug? : KeyPair,
    startDate? : Date,
    endDate? : Date,
    efficacy? : boolean,
    tolerance? : boolean,
    attachement?: string
  ) {}
}