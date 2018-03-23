import { Component, OnInit, Input } from '@angular/core';

import { QuestionBase }     from '../question-base';
import { TableQuestion }    from '../question-table';
import { RuleServiceService } from '../service/rule-service.service';
import { MatTableDataSource } from '@angular/material';
import { KeyPair }            from '../model/key-pair';


@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.css']
})
export class ComplexTableComponent implements OnInit {

  @Input() question: TableQuestion;
  displayedColumns: string[];
  dataSource = undefined;

  constructor(private rulesService: RuleServiceService) { }

  ngOnInit() {
    this.displayedColumns = this.question.columns.map(e => { return e.fieldName });
    // this.displayedColumns = ['efficacy'];
    this.dataSource =new MatTableDataSource(this.question.value);
  }

  test(rows : any) : MatTableDataSource<any> {
    return new MatTableDataSource(rows);
  }

  compareFn(c1: KeyPair, c2: KeyPair): boolean {
    return c1 && c2 ? c1.key === c2.key : c1 === c2;
  }
}
