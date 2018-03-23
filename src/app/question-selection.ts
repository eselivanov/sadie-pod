import { QuestionBase } from './question-base';

export class SelectionQuestion extends QuestionBase<string> {
  inputType = "selection";
  selected: string;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];

    this.controlType = options['controlType'] || '';
  }
}
