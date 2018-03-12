import { Component, Input, Output, OnInit, 
        SimpleChange, SimpleChanges, OnChanges,
        EventEmitter } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { DrugRequest } from '../model/drug-request';

@Component({
  selector: 'app-drug-dosage-request-info',
  templateUrl: './drug-dosage-request-info.component.html',
  styleUrls: ['./drug-dosage-request-info.component.css']
})
export class DrugDosageRequestInfoComponent implements OnChanges, OnInit {

  @Input() drugRequest: DrugRequest;
  @Input() form: FormGroup;
  @Output() loadQuestion = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const drugRequest: SimpleChange = changes.drugRequest;
    console.log('prev value: ', drugRequest.previousValue);
    console.log('got name: ', drugRequest.currentValue);
    this.drugRequest = drugRequest.currentValue;
  }

  ngOnInit() {
  }

  triggerLoadQuestionEvent(event) {
    console.log(event);
    this.loadQuestion.emit(null);
  }

}
