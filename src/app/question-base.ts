import { GDEComponentType } from './gde.componenttype.enum';

export class QuestionBase<T>{
  questionId: string;
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  enumType: GDEComponentType;
  showControl: boolean = true;
  defaultShowControl: boolean = true;

  constructor(options: {
      questionId?: string;
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      showControl?: boolean,
      defaultShowControl?: boolean
    } = {}) {
    this.questionId = options.questionId || '';
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.showControl = options.showControl === undefined ? true : options.showControl;
    this.defaultShowControl = options.defaultShowControl === undefined ? true : options.defaultShowControl;
  }
}
