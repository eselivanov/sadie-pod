import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

import { DrugRequest } from '../model/drug-request';
import { EADrugRequest } from '../model/ea-drug-request';
import { CodeTableService } from '../service/code-table.service';
import { KeyPair } from '../model/key-pair';

@Component({
  selector: 'app-general-request-info',
  templateUrl: './general-request-info.component.html',
  styleUrls: ['./general-request-info.component.css']
})
export class GeneralRequestInfoComponent implements OnInit {

  @Input() eaDrugRequest: EADrugRequest;
  classifications: KeyPair[];
  priorities: KeyPair[];
  specialHandling: KeyPair[];

  constructor(private service: CodeTableService) { 
  }

  ngOnInit() {
    this.service.getClassification().subscribe(classifications => {
      if (classifications) {
        this.classifications = classifications;
      }
    });

    this.service.getPriority().subscribe(priorities => {
      if (priorities) {
        this.priorities = priorities;
      }
    });

    this.service.getSpecialHandling().subscribe(specialHandling => {
      if (specialHandling) {
        this.specialHandling = specialHandling;
      }
    });
  }

}
