import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { GDEForm } from '../../gdeform';
import { QuestionBase } from '../../question-base';
import { QuestionControlService } from '../../question-control.service';
import { QuestionService } from '../../service/question.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { RuleServiceService } from '../../service/rule-service.service';

import { DrugRequest } from '../../model/drug-request';
import { Patient } from '../../model/patient';
import { Prescriber } from '../../model/prescriber';
import { EADrugRequest } from '../../model/ea-drug-request';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() form: FormGroup;
  questions: QuestionBase<any>[] = [];
  drugRequest: DrugRequest;
  prescriber: Prescriber;
  patient: Patient;
  eaDrugRequest: EADrugRequest;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private service: QuestionService, private rulesService: RuleServiceService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup([]);
    this.eaDrugRequest = new EADrugRequest();
    this.drugRequest = new DrugRequest();
    this.patient = new Patient();
    this.prescriber = new Prescriber();
    this.drugRequest.questionId = 4;

    this.patient.firstName = "Hello World!";
    this.patient.healthNumber = "1234567890";
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  getQuestions(): void {
    if (this.drugRequest.questionId) {
      this.service.getQuestions(this.drugRequest.questionId)
        .subscribe(gde => {
          if (gde) {
            this.questions = gde.questions;
          }
          this.form = this.qcs.toFormGroup(this.questions);
        });
    }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  reloadQuestions() {
    this.getQuestions();
  }

  callProcessRulesService() {
    this.rulesService.processRule(this.questions).subscribe(
      q => {
        if (q.length == 0) {
          // No rules executed. Restore default visibility to all questions controls.
          this.questions.forEach((qb) => {
            qb.showControl = qb.defaultShowControl;
          })
        } else {
          // Rule was executed set visibility changes.
          q.forEach(e => {
            this.questions.forEach(qb => {
              let found: boolean = false;
              if (qb.questionId == e) {
                found = true;
              }
              console.log(qb.questionId + ' found ' + found);

              if (found) {
                // The control was found, set the visibility to true.
                qb.showControl = true;
              } else {
                // No rules executed against this question, restore to the default visibility.
                // For always on questions, this will have no effect, for default off this will
                // switch them back off.
                qb.showControl = qb.defaultShowControl;
              }
            });
          });
        }
      }
    );
  }
}
