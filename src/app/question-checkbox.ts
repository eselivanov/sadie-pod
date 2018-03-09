import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
    controlType = 'checkbox';
    selected: string;
    options: {key: string, value: string}[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }
}
