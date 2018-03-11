import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { GDEForm }                   from './gdeform';
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { RuleServiceService } from './rule-service.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  @Input() form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private service : QuestionService, private rulesService: RuleServiceService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup([]);
    this.getQuestions();
  }

  getQuestions(): void {
    this.service.getQuestions2(1)
      .subscribe(gde => {
          console.log('test' + gde.id + ' ' + gde.questions.length);
          this.questions = gde.questions;
          this.form = this.qcs.toFormGroup(this.questions);
        });
  }

  onSubmit() {
    // this.questions.forEach(q => {
    //   q.showControl = true;
    // });
    this.rulesService.getRules().subscribe(t => {
      console.log('test');
    });
    // this.rulesService.processRule(this.questions)
    //   .subscribe(response => console.log(response));
    this.payLoad = JSON.stringify(this.form.value);
  }

  test() {
    this.rulesService.processRule(this.questions).subscribe(
      q => {
        if( q.length == 0 ) {
          // No rules executed. Restore default visibility to all questions controls.
          this.questions.forEach((qb) => {
            qb.showControl = qb.defaultShowControl;
          })
        } else {
          // Rule was executed set visibility changes.
          q.forEach(e => {
            this.questions.forEach((qb) => {
              let found : boolean = false;
              if(qb.questionId == e) {
                found = true;
              }
              console.log(qb.questionId + ' found ' + found);

              if( found ) {
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
