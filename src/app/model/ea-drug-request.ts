import { KeyPair } from './key-pair'

// Exceptional Access Drug Request
export class EADrugRequest {
    classification : KeyPair;
    requestPriority : KeyPair;
    specialHandling : KeyPair;
    requestDate : Date;
    hospitalDischarge : boolean;

    // D/I Pair
    drug : string;
    indication : string;
}
