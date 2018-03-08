import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { GDEForm }                   from './gdeform';
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  @Input() form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private service : QuestionService) {  }

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
    this.payLoad = JSON.stringify(this.form.value);
  }
}
