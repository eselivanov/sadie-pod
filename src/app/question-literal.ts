import { QuestionBase } from './question-base';

export class LiteralQuestion extends QuestionBase<string> {
  inputType = "literal"
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';

    this.controlType = options['controlType'] || '';
  }
}
