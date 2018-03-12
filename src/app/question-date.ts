import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<Date> {
  inputType = 'date';
  controlType = 'date';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
