import { GDEComponentType } from './gde.componenttype.enum';

export class QuestionBase<T>{
  questionId: string;
  value: T;
  key: string;
  questionText: string;
  hintText: string;
  required: boolean;
  order: number;
  inputType: string;
  controlType: string;
  enumType: GDEComponentType;
  showControl: boolean = true;
  defaultShowControl: boolean = true;

  constructor(options: {
      questionId?: string;
      value?: T,
      key?: string,
      hintText?: string,
      questionText?: string,
      required?: boolean,
      order?: number,
      inputType?: string,
      controlType?: string,
      showControl?: boolean,
      defaultShowControl?: boolean
    } = {}) {
    this.questionId = options.questionId || '';
    this.value = options.value;
    this.key = options.key || '';
    this.hintText = options.hintText || '';
    this.questionText = options.questionText || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.inputType = options.inputType || '';
    this.controlType = options.controlType || '';
    this.showControl = options.showControl === undefined ? true : options.showControl;
    this.defaultShowControl = options.defaultShowControl === undefined ? true : options.defaultShowControl;
  }
}
