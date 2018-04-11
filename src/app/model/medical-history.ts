import { KeyPair } from "./key-pair";
//changed condition type to keypair
export class MedicalHistory {
    condition: KeyPair;
    onsetDate: Date;
    remissionDate: Date;
    severity: string;
    attachment: string;
    constructor(
        condition?: KeyPair,
        onsetDate?: Date,
        remissionDate?: Date,
        severity?: string,
        attachment?: string
      ) {}
}
