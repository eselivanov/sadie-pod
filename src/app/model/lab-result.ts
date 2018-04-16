import { KeyPair } from "./key-pair";

export class LabResult {
  //changing labTestName to labResultType to match liberty proj
  labResultType: KeyPair;
  labTestDate: Date;
  labResultValue: string;
  attachment: string;

  constructor(
    labResultType?: KeyPair,
  labTestDate?: Date,
  labResultValue?: string,
  attachment?: string
  ) {}
}