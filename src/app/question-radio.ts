import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  selected: string;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
