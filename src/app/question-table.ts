import { QuestionBase } from './question-base';
import { LabResult } from './model/lab-result';
import { DrugHistory } from './model/drug-history';
import { TableColumn } from './table-column';

export class TableQuestion extends QuestionBase<any[]> {
  inputType = 'complex';
  controlType = 'table';
  primaryIdFieldName: string;
  selected: string;
  options: {key: string, value: string}[] = [];
  columns: TableColumn[];

  constructor(options: {} = {}) {
    super(options);
    
    this.options = options['options'] || [];
    this.columns = options['columns'] || [];
    this.primaryIdFieldName = options['primaryIdFieldName'] || this.columns[0].fieldName;
  }

}
