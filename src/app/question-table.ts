import { QuestionBase } from './question-base';
import { LabResult } from './lab-result';
import { TableColumn } from './table-column';

export class TableQuestion extends QuestionBase<any[]> {
  controlType = 'table';
  selected: string;
  options: {key: string, value: string}[] = [];
  columns: TableColumn[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.columns = options['columns'] || [];
  }

}
